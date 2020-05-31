import { AuthGuardService } from './guards/auth-guard.service';
import { CandidatComponent } from './candidat/candidat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoachComponent } from './coach/coach.component';
import { AddComponent } from './coach/add/add.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component : RegisterComponent},
  {path: 'coach', component : CoachComponent, 
},
  {path: 'candidat', component: CandidatComponent,canActivate: [AuthGuardService] 
},
  { path: 'coach/add', component: AddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
