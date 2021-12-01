import { OptionModel } from "./option.model"

export class QuestionModel  {
    id : number
    text :string
    options : OptionModel[]
    constructor(optionQuantity : number){

        this.options = []

        for (let index = 0; index < optionQuantity; index++) {
            this.options[index] = new OptionModel();        
          }
    }
}