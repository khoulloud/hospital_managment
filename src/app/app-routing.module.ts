import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './component/dashbord/doctor/doctor.component';
import { PatientComponent } from './component/dashbord/patient/patient.component';

const routes: Routes = [{path : '', redirectTo : 'login', pathMatch : 'full'},
{path : 'dashbord', children :
[
  {path : '', redirectTo: 'patient', pathMatch: 'full'},
  {path : 'patient', component: PatientComponent},
  {path : 'doctor', component: DoctorComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
