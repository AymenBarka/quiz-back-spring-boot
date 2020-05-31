import { Injectable } from '@angular/core';
//const TOKEN_KEY='AuthToken';
//const USERNAME_KEY='AuthUsername';
//const AUTHORITIES_KEY='AuthAuthorities';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
 // private role: Array<string>=[];

  constructor() { }
  //public saveToken(token:string){
  //  window.sessionStorage.removeItem(TOKEN_KEY);
   // window.sessionStorage.setItem(TOKEN_KEY,token);
   //}
   //public getToken(): string{
   //  return  sessionStorage.getItem(TOKEN_KEY);
  // }
  // public saveUsername(username){
  //   window.sessionStorage.removeItem(USERNAME_KEY);
  //   window.sessionStorage.setItem(USERNAME_KEY,JSON.stringify(username));
  //  }
  //  public getUsername(): string{
  //   return JSON.parse (sessionStorage.getItem(USERNAME_KEY));
  // }
  // public saveAuthorities(authorities:string[]){
  //   window.sessionStorage.removeItem(AUTHORITIES_KEY);
   //  window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
   // }
   // public getAuthorities(): string[]{
   //  this.role= [];
   //  if(sessionStorage.getItem(TOKEN_KEY)){
   //  JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority=>{
   //    this.role.push(authority.authority)
   //  });
   //} 
     //  return this.role;
  // }
  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
