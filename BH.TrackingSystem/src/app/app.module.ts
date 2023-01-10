import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { PersonelTrackingInformationComponent } from './personel-tracking-information/personel-tracking-information.component';
import { VisitorInformationComponent } from './visitor-information/visitor-information.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { GenerateQrCodeComponent } from './generate-qr-code/generate-qr-code.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    DashboardComponent,
    EmployeeInformationComponent,
    PersonelTrackingInformationComponent,
    VisitorInformationComponent,
    ComposeMessageComponent,
    GenerateQrCodeComponent,
    PatientInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule,
    NgbDropdownModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
