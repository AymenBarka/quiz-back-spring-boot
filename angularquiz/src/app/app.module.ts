import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from './service/auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CoachComponent } from './coach/coach.component';
import { CandidatComponent } from './candidat/candidat.component';
import { AddComponent } from './coach/add/add.component';
import { ListComponent } from './coach/list/list.component';
import { UpdateComponent } from './coach/update/update.component';
import { ListQuizComponent } from './candidat/list-quiz/list-quiz.component';
import { TestQuizComponent } from './candidat/test-quiz/test-quiz.component';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AuthComponent,
    CoachComponent,
    CandidatComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    ListQuizComponent,
    TestQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
     BrowserAnimationsModule,
     MatIconModule,
     MatInputModule,
     MatRadioModule,
     MatSliderModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuardService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
