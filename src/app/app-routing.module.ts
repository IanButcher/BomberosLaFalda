import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SiniestrosComponent } from './pages/siniestros/siniestros.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'siniestro', component: SiniestrosComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
