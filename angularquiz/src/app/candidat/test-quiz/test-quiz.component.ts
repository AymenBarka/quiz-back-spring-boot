import { FormControl } from '@angular/forms';
import { Question } from './../../models/question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.css']
})
export class TestQuizComponent implements OnInit {
  quiz:any
  i = 0;
  score = 0;
  repCand: any = [];
  option = "";

  id: number;
  question : Question;
  constructor(private route: ActivatedRoute, private service: CoachService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(ParamMap => {

      this.service.gettedQuiz(this.route.snapshot.params.id).subscribe(data => {
        this.quiz = data;
        console.log(this.quiz);
        console.log(this.quiz.question[0].reponse);
        this.repCand = new Array(this.quiz.question.length);
      })
    })
  }
  check(option) {
    this.repCand[this.i] = option;
    console.log(this.repCand);
    if (this.repCand[this.i]===this.quiz.question[this.i].reponse){
      this.score = this.score + 1
      console.log(this.score);

    }else{
      this.score = this.score 
    }
  }
  next() {
    this.i++;
  }
  previous() {
    this.i--;
  }
  finish() {
    console.log(this.score);
  }
 
}
