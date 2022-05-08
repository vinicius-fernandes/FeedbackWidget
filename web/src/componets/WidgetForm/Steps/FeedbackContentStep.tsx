import { ArrowArcLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../../ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../"
interface FeedbackContentStepProps{
    feedbackType:FeedbackType;
    onClickReturn:()=>void;
    onFeedbackSent:()=>void;
}
export function FeedbackContentStep({feedbackType, onClickReturn,onFeedbackSent}:FeedbackContentStepProps){
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot,setScreenshot]=useState<string | null>(null);
    const [comment,setComment]=useState<string>("");
    const [isSendingFeedback,setIsSendingFeedback]=useState(false);

    async function  handleSubmitFeedback(event:FormEvent){
        event.preventDefault();    
        setIsSendingFeedback(true);


        await api.post('feedbacks',{
            type:feedbackType,
            comment:comment,
            screenshot:screenshot
        });
        setIsSendingFeedback(false);

        onFeedbackSent();
    }
    return (
        
            <>
            <header>
            <button 
            type="button" 
            className="top-5 left-5 absolute text-zinc-500 hover:text-zinc-100"
            onClick={onClickReturn}
            >
                <ArrowArcLeft weight="bold" className="w-4 h-4"></ArrowArcLeft>
            </button>
            <span className="text-xl leading-6 flex itens-center gap-1">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-4 h-4" />
                {feedbackTypeInfo.title}
                </span>
            <CloseButton></CloseButton>
    
        </header>
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
<textarea
    className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-500 text-zinc-100 border-zinc-300 bg-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-zinc-700"
    placeholder="Digite a mensagem a ser enviada..."
    onChange={event =>setComment(event.target.value)}
    />
        <footer className="flex gap-2 mt-2 mb-1 w-full">
            <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTaken={setScreenshot}/>

         <button
            type="submit"
            disabled={comment.length===0 || isSendingFeedback}
            className="p-2 bg-blue-500 rounded-md border-transparent flex-1 flex justify-center items-center mb-1 text-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900  transition-color disabled:opacity-50 disabled:hover:bg-blue-500"
            >
                            {isSendingFeedback?
            <Loading/>:
            'Enviar'

            }
            </button>
        </footer>
        </form>

        </>
    )
}