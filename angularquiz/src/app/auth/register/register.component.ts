import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpInfo } from 'src/app/models/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage='';
  submitted = false;
  form: SignUpInfo = new SignUpInfo();
  role: String[] = [];
  
  
  constructor(private authService: AuthService, private router:Router) { }


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      role : new FormControl('',[Validators.required])     
    });

    
    
  }
 

  get f() { return this.registerForm.controls; }
  chooseRoles(event) {
    if (event.target.checked == true) {
      this.role.push(event.target.value);
      console.log(event.target.checked);     
      console.log(this.role);
    } else {
    if (this.role.length > 0)
    {
        for (let index = 0; index < this.role.length; index++) {
          const element = this.role[index];
          if (element == event.target.value)
          {
            this.role[index] = '';
           console.log(this.role[index]);
          }
        }
      }
    }
   }
  onSubmit() {
    this.form.role = this.role; 
    this.authService.signUp(this.form).subscribe(data => {
      this.submitted = true;
      this.router.navigate(['login']);
      
    },
    error => {
      this.submitted = false;
      this.errorMessage = error.error.message;
    }
    );
  }

}
