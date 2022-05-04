import { CloseButton } from "../../CloseButton";
import { feedbackTypes,FeedbackType } from "../Index"
interface FeedbackTypeStepProps{
    onFeedBackTypeChanged:(type:FeedbackType) =>void;
}
export function FeedbackTypeStep({onFeedBackTypeChanged}:FeedbackTypeStepProps){
    return (
        <>
        <header>

        <span className="text-xl leading-6">Deixe seu feedback !</span>
        <CloseButton></CloseButton>

        </header>
        <div className="flex py-5 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key,value])=>{
                return(
                    <button
                    className="rounded-lg bg-zinc-800 flex w-24 py-5 flex-col items-center gap-2 p-4 border-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                    key={key}
                    onClick = {()=>onFeedBackTypeChanged(key as FeedbackType)}
                    >
                        <img src={value.image.source} alt={value.image.alt}></img>
                        <span>{value.title}</span>
                    </button>
                )
            })}
        </div>
    </>
    )
}