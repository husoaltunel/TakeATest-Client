import { Component, OnInit } from '@angular/core';
import { ExamMessages } from 'src/app/constants/exam-messages';
import { ExamModel } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {

  exams : ExamModel[]

  constructor(private examService: ExamService,private sweetAlertService : SweetAlertService) {
    this.exams = [];
    this.getExams();
  }

  ngOnInit(): void {
  }

  getExams() {
    return this.examService.getExams().subscribe(response => {
      if (response.success) {
        this.exams = response.data
      }
    })
  }
  deleteExam(id : string){
    this.examService.deleteExamById(id).subscribe(response => {
      if (response.success) {
        this.sweetAlertService.success(ExamMessages.deleted);
        this.getExams();
      }
    })
  }

}
