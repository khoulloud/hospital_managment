import { Doctor } from './../../../../shared/model/doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patient_id !: any;
  patientObj !: any;
  doctorObj: any;


  constructor(
    route : ActivatedRoute,
    private dataApi : DataService
  ) {
    this.patient_id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPatientById();
  }

  getPatientById() {
    this.dataApi.getPatientById(this.patient_id).subscribe(res => {
      this.patientObj = res;
      if (this.patientObj && this.patientObj.admission_date) {
        this.patientObj.admission_date = this.patientObj.admission_date.toDate();
      }
      this.getDoctorName(this.patientObj.doctor_id);
    });
  }

  getDoctorName(doctor_id: string) {
    this.dataApi.getDoctorById(doctor_id).subscribe(res => {
      this.doctorObj = res;
      this.patientObj.doctor_name = this.doctorObj?.doctor_name ;
    });
  }
}
