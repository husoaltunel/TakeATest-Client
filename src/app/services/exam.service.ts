import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamWithQuestionsModel } from '../models/exam-with-questions.model';


import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private path : string = "Exam/";

  constructor(private http : HttpService) { }

  insertExam(exam : ExamWithQuestionsModel) : Observable<any>{
    return this.http.post(this.path+"insert-with-questions" ,exam);
  }
  getExams(): Observable<any>{
    return this.http.get(this.path);
  }
  getExamWithQuestionsById(id : string){
    return this.http.get(this.path+"get-with-questions-by-id/"+id);
  }
  deleteExamById(id : string){
    return this.http.delete(this.path+id);
  }
}
