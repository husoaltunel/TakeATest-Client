import { QuestionModel } from "./question.model"

export class ExamModel {
    id : number
    title : string
    text : string
    date : string
    isActive : number
    questions : QuestionModel[]
    constructor(){

        this.questions = []
    }
}