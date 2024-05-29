import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environement';
import { MaterialModule } from './material/material/material.module';
import { PatientComponent } from './component/dashbord/patient/patient.component';
import { SidebarComponent } from './component/dashbord/sidebar/sidebar.component';
import { DoctorComponent } from './component/dashbord/doctor/doctor.component';
import { AddDoctorComponent } from './component/dashbord/doctor/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDoctorComponent } from './component/dashbord/doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './component/dashbord/doctor/view-doctor/view-doctor.component';
import { AddPatientComponent } from './component/dashbord/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './component/dashbord/patient/delete-patient/delete-patient.component';
import { ViewPatientComponent } from './component/dashbord/patient/view-patient/view-patient.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SidebarComponent,
    DoctorComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    ViewDoctorComponent,
    AddPatientComponent,
    DeletePatientComponent,
    ViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {
}
