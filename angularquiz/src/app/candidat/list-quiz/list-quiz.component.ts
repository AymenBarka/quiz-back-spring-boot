import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {
  id:number;

  constructor(private router:Router,private service : CoachService) { }
  tab = [];

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.service.getQuiz().subscribe(data =>{
      console.log(data);
      this. tab = data;
      console.log(data);
    },(error)=>{
      console.log(error);
    
   });
  }
  passQuiz(test){
    this.router.navigate(['/candidat/testQuiz',test.id]);

  }
}
