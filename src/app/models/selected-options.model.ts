export class SelectedOptionsModel{
    options : number[]

    constructor(optionQuantity : number){
        this.options = [];
        for (let index = 0; index < optionQuantity; index++) {
            this.options[index] = 0;
            
        }
    }
}