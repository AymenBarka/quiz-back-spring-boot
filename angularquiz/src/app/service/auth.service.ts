import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenStorageService } from '../token/token-storage.service';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

export class JwtResponse {
  constructor(
    public jwttoken: string,
  ) { }
}
const TOKEN_KEY = 'AuthToken';
const ID = 'id';
const TOKEN = 'token';
const USERNAME = 'username';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;

  public currentUser: Observable<any>;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  signupUrl = 'http://localhost:8084/api/auth/';
  loginUrl = 'http://localhost:8084/api/auth/login';

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  signUp(signupInfo: any): Observable<any> {

    return this.http.post(`${this.signupUrl}` + 'signup', signupInfo, httpOptions);

  }


  login(loginInfo: any): Observable<any> {
    return this.http.post(`${this.signupUrl}` + 'signin', loginInfo, httpOptions)
    //.pipe(
      //map(
      //  data => {
       //   console.log(data);
        //  this.saveUserData(data)

        //  return data;
       // }
      //)
   // );
  }
 // private saveUserData(data) {
   // this.tokenStorage.saveToken(data.accessToken);
  //  console.log(data.accessToken);
  //  this.tokenStorage.saveUsername(data.username);
   // this.tokenStorage.saveAuthorities(data.authorities);
   // this.currentUserSubject.next(data.accessToken);
   // console.log(data);
 // }
  loggedIn() {
    return sessionStorage.getItem(TOKEN);
  }

}
