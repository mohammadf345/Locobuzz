import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LbSidebarComponent } from './lb-sidebar/lb-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LocobuzzHeaderComponent } from './locobuzz-header/locobuzz-header.component';
import { LbSummaryComponent } from './lb-summary/lb-summary.component';
import { LbTicketComponent } from './lb-ticket/lb-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LbSidebarComponent,
    DashboardComponent,
    LocobuzzHeaderComponent,
    LbSummaryComponent,
    LbTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
