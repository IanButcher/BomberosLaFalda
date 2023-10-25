import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SiniestrosComponent } from './siniestros/siniestros.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    SiniestrosComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
