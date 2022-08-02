import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { questionsService } from "../Services/QuestionsService.js";



function _drawQuestions(){
    let template = ''

    ProxyState.questions.forEach(q => template += q.Template)
    document.getElementById('question').innerHTML = `
    <div>
    ${template}
    </div>
    `
}


export class QuestionsController{
    constructor(){
        console.log('testing');

        ProxyState.on('question', _drawQuestions)
    }


    async getQuestionFromAPI(){
        try {
            await questionsService.getQuestion()
        } catch (error) {
            console.log('[Getting Question]', error);
            Pop.error(error)
            
        }
    }
}