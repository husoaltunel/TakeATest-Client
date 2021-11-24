import { Component, OnInit } from '@angular/core';
import { optionLetters } from 'src/app/constants/option-letters';
import { ExamModel } from 'src/app/models/exam.model';


@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  exam: ExamModel;
  questionQuantity: number;
  optionQuantity: number;
  optionLetters : string[];
  constructor() {
    this.exam = new ExamModel();
    this.exam.questions = [];
    this.exam.questions.forEach(question => question.options = []);
    this.questionQuantity = 4;
    this.optionQuantity = 4;
    this.optionLetters = optionLetters;
    console.log(this.exam)
  }

  ngOnInit(): void {

  }

  counter(i: number) {
    return new Array(i);
}


}
