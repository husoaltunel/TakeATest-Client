import { Component, OnInit } from '@angular/core';
import { optionLetters } from 'src/app/constants/option-letters';
import { ExamModel } from 'src/app/models/exam.model';
import { OptionModel } from 'src/app/models/option.model';
import { QuestionModel } from 'src/app/models/question.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  exam: ExamModel;
  questionQuantity: number;
  optionQuantity: number;
  optionLetters: string[];
  constructor() { 
    this.exam = new ExamModel();
    this.questionQuantity = 4;
    this.optionQuantity = 4;
    this.optionLetters = optionLetters;
    this.createNullExam();
  }

  ngOnInit(): void {
  }

  createNullExam(){
    for (let index = 0; index < this.questionQuantity; index++) {
       this.exam.questions[index] = new QuestionModel();
      for (let j = 0; j < this.optionQuantity; j++) {
        this.exam.questions[index].options[j] = new OptionModel();        
      }
    }
  }

}
