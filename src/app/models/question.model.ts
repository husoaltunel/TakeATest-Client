import { OptionModel } from "./option.model"

export class QuestionModel  {
    id : number
    text :string
    options : OptionModel[]
    constructor(){
        this.id = 0,
        this.text = "",
        this.options = [];
    }
}