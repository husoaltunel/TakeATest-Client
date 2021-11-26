import { Component, OnInit } from '@angular/core';
import { ExamMessages } from 'src/app/constants/exam-messages';
import { optionLetters } from 'src/app/constants/option-letters';
import { Article } from 'src/app/models/article.model';
import { ExamWithQuestionsModel } from 'src/app/models/exam-with-questions.model';
import { OptionModel } from 'src/app/models/option.model';
import { QuestionModel } from 'src/app/models/question.model';
import { SelectedOptions } from 'src/app/models/selected-options.model';
import { ArticleService } from 'src/app/services/article.service';
import { ExamService } from 'src/app/services/exam.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';


@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  exam: ExamWithQuestionsModel;
  questionQuantity: number;
  optionQuantity: number;
  optionLetters: string[];
  articles: Article[];
  selectedArticle : Article;
  selectedOptions : SelectedOptions;

  constructor(private articleService: ArticleService,private examService : ExamService,private sweetAlertService : SweetAlertService) {
    this.questionQuantity = 4;
    this.optionQuantity = 4;
    this.exam = new ExamWithQuestionsModel(this.questionQuantity, this.optionQuantity);
    this.optionLetters = optionLetters;
    this.selectedArticle = new Article();
    this.selectedOptions = new SelectedOptions(this.questionQuantity);
    this.getArticles();
  }

  ngOnInit(): void {
    
  }



  getArticles() {
    this.articleService.getArticles().subscribe((response: any) => {
      if (response.success) {
        this.articles = response.data;
        this.selectedArticle = this.articles[0];
      }
    },error => console.log(error)
    )
  }

  
 
  setExam(){
    this.exam.title = this.selectedArticle.title;
    this.exam.text = this.selectedArticle.text;
    for (let index = 0; index < this.questionQuantity; index++) {
      this.exam.questions[index].options[this.selectedOptions.options[index]].isTrue = 1;
      
    }
  }


  createExam(){
    this.setExam(); 
    this.examService.insertExam(this.exam).subscribe(response => {
      console.log(response);
      if(response.success){
        return this.sweetAlertService.success(ExamMessages.examCreated);
      }
      return this.sweetAlertService.error(ExamMessages.anError);
    })
  }

}
