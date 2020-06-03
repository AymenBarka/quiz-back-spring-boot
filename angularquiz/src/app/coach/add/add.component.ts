import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  test: FormGroup;

  constructor(private quizService:CoachService ,private route: Router) { }

  ngOnInit(): void {
    this.test = new FormGroup({
     // idcoach: new FormControl(this.service.connect.id),
      titre: new FormControl('', [Validators.required]),
      question: new FormArray([]),
    });
    
  }
  get question() {return this.test.get('question') as FormArray; }
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
  addques() {
    this.question.push(this.ques());
    console.log(this.ques());
  }
  addt() {
    this.quizService.addQuiz(this.test.value).subscribe( data=> {
      console.log(this.test.value);
      this.route.navigateByUrl('/register');


    })


  }
}
