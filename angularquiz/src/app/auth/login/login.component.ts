import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TokenStorageService } from '../../token/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage='';
  roles: string[] = [];

  constructor(private service : AuthService,private router: Router, private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    });
  //  if (this.tokenStorage.getToken()) {
   //   this.submitted = true;
    //  this.roles = this.tokenStorage.getUser().roles;
  //  }
    
  }
  get f() { return this.loginForm.controls; }

  onSubmit(){
   // this.submitted = true;
    if (this.loginForm.invalid) {
     return;
  }
  //this.loading = true;
  this.service.login(this.loginForm.value).pipe(first())
      
      .subscribe(
          data => {
            //this.tokenStorage.saveToken(data.accessToken);
            //this.tokenStorage.saveUsername(data);

            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);

            this.roles = this.tokenStorage.getUser().roles;
            this.loading=true;
           this.submitted = true;
           console.log(this.roles);

           if (this.roles.includes('ROLE_COACH')){
            console.log(this.roles);

           this.router.navigate(['/coach']);
           
           }else {
            this.router.navigate(['/candidat']);

           }
          },
          error => {
            this.errorMessage = error.error.message;

              this.loading = false;
              this.submitted = false;
          });

  }
  
}
