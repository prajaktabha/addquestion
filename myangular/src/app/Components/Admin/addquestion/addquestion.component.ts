import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Class/question';
import { AddquestionService } from 'src/app/services/Admin/addquestion.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {


  que = new Question();
  quizname:any; 
  category : any;
  type:any;
  submitted = false;
  
  constructor(private addQuestionService:AddquestionService) { }

  
  ngOnInit(): void {
    this. getQuizName();
    this.getCategoryName();
    this.getTypeName();
  }


  addQuestion(){
    
    this.submitted = true;
    console.log(this.que, "This is from form")
    this.addQuestionService.addQuestion(this.que).subscribe(data=>{
      console.log(data);
      alert(data);
    })
  }

  getQuizName() {
    return this.addQuestionService.getQuizName()
      .subscribe(
        que =>{
          this.quizname = que;
          console.log( this.quizname);
        } 
    );
 }

 getCategoryName() {
  return this.addQuestionService. getCategoryName()
    .subscribe(
      que =>{
        this.category = que;
        console.log( this.category);
      } 
  );
}

getTypeName() {
  return this.addQuestionService.getTypeName()
    .subscribe(
      que =>{
        this.type= que;
        console.log( this.type);
      } 
  );
}
}


