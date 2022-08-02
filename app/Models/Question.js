export class Question{
    constructor({question, correct_answer, incorrect_answers}){
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers 
    }

    get Template(){
        return `
        <div class="col-10">${this.question}</div>

        <div class="col-5">${this.correctAnswer}</div>
        <div class="col-5">${this.incorrectAnswers}</div>
        `
    }
}
