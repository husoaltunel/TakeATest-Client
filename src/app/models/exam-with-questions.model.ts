import { QuestionModel } from "./question.model"

export class ExamWithQuestionsModel {
    id : number
    title : string
    text : string
    date : string
    questions : QuestionModel[]
    constructor(questionQuantity : number = 4,optionQuantity : number = 4){

        this.questions = []

        for (let index = 0; index < questionQuantity; index++) {
            this.questions[index] = new QuestionModel(optionQuantity);
           
         }
        
    }
}
