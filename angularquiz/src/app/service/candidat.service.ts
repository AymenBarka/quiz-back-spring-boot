import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http : HttpClient) { }
  URL = 'http://localhost:8084/quiz/';

  resultQuiz(payLoad:any):Observable<any>{
    return this.http.post(`${this.URL}` + 'calculQuiz', payLoad,httpOptions)

  }
}
