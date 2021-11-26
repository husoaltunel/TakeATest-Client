import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExamModel } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  exams : ExamModel[]

  constructor(private examService: ExamService) {
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

}
