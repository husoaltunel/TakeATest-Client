import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExamMessages } from 'src/app/constants/exam-messages';
import { optionLetters } from 'src/app/constants/option-letters';
import { ExamWithQuestionsModel } from 'src/app/models/exam-with-questions.model';
import { SelectedOptionsModel } from 'src/app/models/selected-options.model';

import { ExamService } from 'src/app/services/exam.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  exam: ExamWithQuestionsModel;
  questionQuantity: number;
  optionQuantity: number;
  optionLetters: string[];
  selectedOptions: SelectedOptionsModel;
  constructor(private route: ActivatedRoute, private examService: ExamService, private el: ElementRef, private sweetAlertService: SweetAlertService,private renderer : Renderer2) {
    this.questionQuantity = 4;
    this.optionQuantity = 4;
    this.exam = new ExamWithQuestionsModel(this.questionQuantity, this.optionQuantity);
    this.optionLetters = optionLetters;
    this.getExam(this.route.snapshot.paramMap.get('id'))
    this.selectedOptions = new SelectedOptionsModel(this.questionQuantity);
  }

  ngOnInit(): void {

  }

  getExam(id: any) {
    this.examService.getExamWithQuestionsById(id).subscribe(response => {
      if (response.success) {
        this.exam = response.data
      }
    })
  }
  changeChecked(event : any){
    if(event.target.checked){
      event.target.checked = false;

    }
    
  }
  trackByFn(index: number,el:any): number {
    return el.id;
  }
  onFormSubmit(examForm: NgForm) {
    
    for (let index = 0; index < this.questionQuantity * this.optionQuantity; index++) {
      let element = this.el.nativeElement.querySelectorAll(`.radioDiv`);
      this.renderer.removeClass(element[index], "right")
      this.renderer.removeClass(element[index], "wrong")
    }
    for (let index = 0; index < this.questionQuantity; index++) {
      if(examForm.controls[index].value === '') continue
      this.selectedOptions.options[index] = examForm.controls[index].value;
      if (this.exam.questions[index].options[this.selectedOptions.options[index]].isTrue == 1) {
        let element = this.el.nativeElement.querySelector(`.${optionLetters[index]}${optionLetters[this.selectedOptions.options[index]]}`);
        element?.classList.add("right");
      }
      else {
        let element = this.el.nativeElement.querySelector(`.${optionLetters[index]}${optionLetters[this.selectedOptions.options[index]]}`);
        element?.classList.add("wrong");
      }

    }






  }

}
