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
  testId: string | null
  constructor(private route: ActivatedRoute, private examService: ExamService, private el: ElementRef, private sweetAlertService: SweetAlertService, private renderer: Renderer2) {
    this.questionQuantity = 4;
    this.optionQuantity = 4;
    this.exam = new ExamWithQuestionsModel(this.questionQuantity, this.optionQuantity);
    this.optionLetters = optionLetters;
    this.testId = this.route.snapshot.paramMap.get('id');
    this.getExam(this.testId);
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
  unCheck(event: any, examForm: NgForm) {
    let radio = event.target;
    let radioFormControl = examForm.controls[radio.id];

    if (radio.checked) {
      radio.checked = false;
      radioFormControl.patchValue('');
    }

  }
  trackByFn(index: number, el: any): number {
    return el.id;
  }
  onFormSubmit(examForm: NgForm) {

    this.clearAnswersBackground();
    this.setSelectedOptions(examForm);
    this.setAnswersBackground(examForm);

  }

  clearAnswersBackground() {
    let rightRadioDivs = this.el.nativeElement.querySelectorAll(`.right`);
    let wrongRadioDivs = this.el.nativeElement.querySelectorAll(`.wrong`)

    rightRadioDivs.forEach((el: any) => {
      this.renderer.removeClass(el, "right")
    });

    wrongRadioDivs.forEach((el: any) => {
      this.renderer.removeClass(el, "wrong")
    });

  }
  setSelectedOptions(examForm: NgForm) {

    for (let index = 0; index < this.questionQuantity; index++) {
      let radioFormControlValue = examForm.controls[index].value;
      this.selectedOptions.options[index] = radioFormControlValue;
    }

  }
  checkSelectedOptionIsTrue(index: number) {
    let questionOptions = this.exam.questions[index].options;
    let selectedOption = this.selectedOptions.options[index]

    return questionOptions[selectedOption].isTrue == 1;
  }
  setAnswersBackground(examForm: NgForm) {
    for (let index = 0; index < this.questionQuantity; index++) {
      let radioFormControlValue = examForm.controls[index].value;

      if (radioFormControlValue === '') continue

      let radioDiv = this.el.nativeElement.querySelector(`.radioDiv${index}${radioFormControlValue}`);

      if (this.checkSelectedOptionIsTrue(index)) {

        radioDiv?.classList.add("right");
      }
      else {
        radioDiv?.classList.add("wrong");
      }

    }
  }

}
