import { QuestionModel } from "./question.model"

export class ExamModel {
    title : string
    text : string
    date : string
    questions : QuestionModel[]
}