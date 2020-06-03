import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http : HttpClient) { }
  URL = 'http://localhost:8084/quiz/';

  addQuiz(quiz: Quiz): Observable<any>{
    return this.http.post(`${this.URL}` + 'add',quiz)

  }

  getQuiz(): Observable<any>{
    return this.http.get(`${this.URL}` +  'ListQuiz');
  }
  deleteQuiz(id:number ): Observable<any>{
    return this. http.delete(`${this.URL}`+ 'deleteQuiz' + '/'  + `${id}`, httpOptions);
  }
  updateQuiz(id:number,value:any) : Observable<any>{
    return this.http.put(`${this.URL}`+ 'UpdateQuiz' + '/'  + `${id}`,value);
  }
  gettedQuiz(id:number):Observable<any>{
    return this.http.get(`${this.URL}` + 'quizbyId' + '/'  + `${id}`);
  }
}
