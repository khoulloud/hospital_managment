import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './component/dashbord/doctor/doctor.component';
import { PatientComponent } from './component/dashbord/patient/patient.component';
import { ViewDoctorComponent } from './component/dashbord/doctor/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './component/dashbord/patient/view-patient/view-patient.component';


const routes: Routes = [{path : '', redirectTo : 'login', pathMatch : 'full'},
{path : 'dashbord', children :
[
  {path : '', redirectTo: 'patient', pathMatch: 'full'},
  {path : 'patient', component: PatientComponent},
  {path : 'doctor', component: DoctorComponent},
  {path : 'doctor/:id', component: ViewDoctorComponent},
  {path : 'patient/:id', component: ViewPatientComponent},




]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
