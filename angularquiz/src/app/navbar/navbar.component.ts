import { TokenStorageService } from './../token/token-storage.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router ,public service : AuthService, private  tokenService : TokenStorageService) { }

  ngOnInit(): void {
  }
  logout(){
    this.tokenService.signOut();
    this.router.navigateByUrl('/login');
  }
}
