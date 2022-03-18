import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DocumentsComponent } from './documents/documents/documents.component';
import { PaginationComponent } from './documents/pagination/pagination.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    DocumentsComponent,
    PaginationComponent,
    DocumentDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
