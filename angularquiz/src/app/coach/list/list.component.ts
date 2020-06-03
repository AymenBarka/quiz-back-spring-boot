import { Quiz } from './../../models/quiz';
import { Component, OnInit } from '@angular/core';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
id:number;
  constructor(private service : CoachService) { }
  tab = [];
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.service.getQuiz().subscribe(data =>{
      console.log(data);
      this. tab = data;
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

}
