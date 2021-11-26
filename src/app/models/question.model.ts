import { OptionModel } from "./option.model"

export class QuestionModel  {
    id : number
    text :string
    options : OptionModel[]
    constructor(optionQuantity : number){
        this.id = 0
        this.text = ""
        this.options = []

        for (let index = 0; index < optionQuantity; index++) {
            this.options[index] = new OptionModel();        
          }
    }
}