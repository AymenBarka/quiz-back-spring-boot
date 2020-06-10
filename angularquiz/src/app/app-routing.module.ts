import { AuthGuardService } from './guards/auth-guard.service';
import { CandidatComponent } from './candidat/candidat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoachComponent } from './coach/coach.component';
import { AddComponent } from './coach/add/add.component';
import { ListComponent } from './coach/list/list.component';
import { UpdateComponent } from './coach/update/update.component';
import { TestQuizComponent } from './candidat/test-quiz/test-quiz.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coach', component: CoachComponent, canActivate: [AuthGuardService]  },
  { path: 'candidat', component: CandidatComponent, canActivate: [AuthGuardService] },
  { path: 'coach/add', component: AddComponent, canActivate: [AuthGuardService] },
  { path: 'coach/list', component: ListComponent, canActivate: [AuthGuardService] },
  { path: 'coach/update/:id', component: UpdateComponent, canActivate: [AuthGuardService]},
  { path: 'candidat', component: CandidatComponent , canActivate: [AuthGuardService]},
  { path: 'candidat/testQuiz/:id', component: TestQuizComponent , canActivate: [AuthGuardService]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
