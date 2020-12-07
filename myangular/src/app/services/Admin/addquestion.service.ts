import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/app/Class/question';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddquestionService {
  private questionUrl = 'http://localhost:8080/api/questions/addQuestion';  // URL to web api
  constructor(private http: HttpClient) { }

  addQuestion (question: Question): Observable<Question> {
    console.log(question, "This is a question")

   return this.http.post<Question>(this.questionUrl, question, httpOptions);

 }

 getQuizName(){
   return this.http.get('http://localhost:8080/api/questions/getQuizName')
 }

 getCategoryName(){
   return this.http.get('http://localhost:8080/api/questions/getCategoryName')
 }
 getTypeName(){
   return this.http.get('http://localhost:8080/api/questions/getTypeName')
 }
}
