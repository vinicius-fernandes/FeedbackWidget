import { MailAdapter } from '../adapters/mailAdapter';
import {FeedbacksRepository} from '../repositories/feedbacksRepository';
interface SubmitFeedbackServiceRequest{
    type:string,
    comment:string,
    screenshot?:string;
}


export class SubmitFeedbackService{
    private _feedbacksRepository: FeedbacksRepository;
    private _mailAdapter : MailAdapter;
    constructor(feedbacksRepository: FeedbacksRepository,mailAdapter:MailAdapter){
        this._feedbacksRepository = feedbacksRepository
        this._mailAdapter=mailAdapter;
    }
    async execute(request : SubmitFeedbackServiceRequest){
        const {type,comment,screenshot} = request;
        await this._feedbacksRepository.create({
            type,
            comment,
            screenshot 
        })
        if(!type){
            throw new Error('Type is required');
        }
        if(!comment){
            throw new Error('Comment is required');
        }
        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Screnshot format not allowed');
        }
        await this._mailAdapter.sendMail({
            subject:'Novo Feedback',
            body:[
                `<div style="font-family:sans-serif,font-size:16px;color:#111">`,
                `<p>Tipo do feedback ${type}</p>`,
                `<p>Comentário ${comment}</p>`,
                `</div>`
    
            ].join('\n')

        })

    }
}