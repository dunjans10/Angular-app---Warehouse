import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentsComponent } from './documents/documents/documents.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'documents', component:DocumentsComponent},
  {path:'documents/:documentId', component:DocumentDetailsComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
