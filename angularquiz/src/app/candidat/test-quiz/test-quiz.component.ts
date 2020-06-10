import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from 'src/app/service/coach.service';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.css']
})
export class TestQuizComponent implements OnInit {
  tab=[];
  f:any;
  id: number;
  quiz: [];
  constructor(private route: ActivatedRoute, private service: CoachService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(ParamMap => {

      this.service.gettedQuiz(this.route.snapshot.params.id).subscribe(data => {
        this.quiz = data;
        console.log(this.quiz)

      })
    })
  }
  
}
