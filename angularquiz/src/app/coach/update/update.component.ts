import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoachService } from 'src/app/service/coach.service';
import { Quiz } from 'src/app/models/quiz';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:number;
  quiz: Quiz;
  testup: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private service: CoachService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params.id;
   this.quiz = new Quiz();
    this.route.paramMap.subscribe(ParamMap => {

      this.service.gettedQuiz(this.route.snapshot.params.id).subscribe(data => {
        this.quiz = data;
        console.log(this.quiz.question);


        this.testup = new FormGroup({
          //  idcoach: new FormControl(this.service.listtest[this.index].idcoach),
          titre: new FormControl(this.quiz.titre),
          question: new FormArray([])
        });
        this.initQ();

      })
    });
  }
  get question() { return this.testup.get('question') as FormArray; }
  ques(): FormGroup {
    return new FormGroup({
      questionName: new FormControl(''),
      reponse: new FormControl(''),
      option1: new FormControl(''),
      option2: new FormControl(''),
      option3: new FormControl(''),
      option4: new FormControl('')
    });
  }
  initQ() {//this.service.gettedQuiz[this.quiz._id]
    console.log(this.quiz.question)
   this.quiz.question.map(q => {
      (this.testup.get('question') as FormArray).push(this.quesInit(q));
      console.log(this.testup)
    });
  }
  quesInit(q): FormGroup {
    return new FormGroup({
      questionName: new FormControl(q.questionName),
      reponse: new FormControl(q.reponse),
      option1: new FormControl(q.option1),
      option2: new FormControl(q.option2),
      option3: new FormControl(q.option3),
      option4: new FormControl(q.option4)
    });
  }

   addques() {
    this.question.push(this.ques());
  }
 
  update() {
    this.service.updateQuiz(this.quiz.id, this.testup).subscribe(data => {
       console.log(data);
     this.router.navigateByUrl('/register');
    },err =>{

    console.log(err)
    });
  }
 

}



