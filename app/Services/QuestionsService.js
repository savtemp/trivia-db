import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";


class QuestionsService{
    async getQuestion(){
        let res = await axios.get('https://opentdb.com/api.php?amount=10')
        console.log('get question response', res);
        ProxyState.questions = res.data.result.map(q => new Question(q))
    }

}



export const questionsService = new QuestionsService()
