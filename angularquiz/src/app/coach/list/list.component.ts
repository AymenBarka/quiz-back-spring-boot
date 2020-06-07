import { Quiz } from './../../models/quiz';
import { Component, OnInit } from '@angular/core';
import { CoachService } from 'src/app/service/coach.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
  remove(id:number) {
    this.service.deleteQuiz(id).subscribe(data =>{
      console.log(data);
      this.loadData();
    },(error)=>{
      console.log(error);
    })
      }
      update(test){
        this.router.navigate(['/coach/update',test.id]);
      }

}
