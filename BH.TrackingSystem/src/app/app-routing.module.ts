import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { GenerateQrCodeComponent } from './generate-qr-code/generate-qr-code.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { PersonelTrackingInformationComponent } from './personel-tracking-information/personel-tracking-information.component';
import { VisitorInformationComponent } from './visitor-information/visitor-information.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: { breadcrumb: "Dashboard" }},
  {path: 'visitor-information', component: VisitorInformationComponent, data: { breadcrumb: "Visitor Information" }},
  {path: 'employee-information', component: EmployeeInformationComponent, data: { breadcrumb: "Employee Information" }},
  {path: 'patient-information', component: PatientInformationComponent, data: { breadcrumb: "Patient Information" }},
  {path: 'compose-message', component: ComposeMessageComponent, data: { breadcrumb: "Compose Message" }},
  {path: 'generate-qr-code', component: GenerateQrCodeComponent, data: { breadcrumb: "Generate QR Code" }},
  {path: 'personel-activity-tracker', component: PersonelTrackingInformationComponent, data: { breadcrumb: "Personel Activity Tracker" }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
