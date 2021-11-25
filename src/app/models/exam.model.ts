import { QuestionModel } from "./question.model"

export class ExamModel {
    id : number
    title : string
    text : string
    date : string
    questions : QuestionModel[]
    constructor(){
        this.id = 0
        this.title = "",
        this.text = "",
        this.date = "",
        this.questions = [];
    }
}