import { CloseButton } from "../CloseButton"
import bugImage from '../../assets/inseto.png';
import ideiaImage from '../../assets/ideia.png';
import pensamentoImage from '../../assets/thinking.png';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
export const feedbackTypes = {
    BUG:{
        title:"Bug",
        image:{
            source:bugImage,
            alt:"Imagem de inseto"
        }
    },
    IDEA:{
        title:"Ideia",
        image:{
            source:ideiaImage,
            alt:"Imagem de uma lampada"
        }
    },
    OTHER:{
        title:"Outro",
        image:{
            source:pensamentoImage,
            alt:"Imagem de uma nuvem remetendo a pensamento"
        }
    }

}

export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm(){
    const [feedbackType,setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent,setFeedbackSent] = useState(false);

    function resetFeedbackType(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >
            {feedbackSent?
            (
            <FeedbackSuccessStep
            onRestartRequested={resetFeedbackType}
            />):
            (<>
            
            {!feedbackType?(
                <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType}/>

            ):(
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onClickReturn={resetFeedbackType}
                onFeedbackSent={()=>setFeedbackSent(true)}
                />
            )}
            
            </>)}
            <footer className="text-xs text-neutral-500">
                Código disponível no <a href="https://github.com/vinicius-fernandes/FeedbackWidget">Github</a>
            </footer>
        </div>
    )
}