import { CloseButton } from "../../CloseButton";
import Checked from "../../../assets/checked.png"

interface FeedbackSuccessStepProps{
    onRestartRequested:()=>void;
}
export function FeedbackSuccessStep({onRestartRequested}:FeedbackSuccessStepProps){
    return (
        <>
        <header>
            <CloseButton/>
        </header>
        <div className="flex flex-col items-center py-10 ">
            <img src={Checked} className="h-10 w-10"/>
           <span className="text-xl mt-2">Agradecemos o feedback !</span> 
        </div>
        <button
        type="button"
        onClick={onRestartRequested}
        className="p-2 bg-zinc-500 rounded-md border-transparent flex-1 flex justify-center items-center mb-1 text-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900  transition-color disabled:opacity-50 disabled:hover:bg-blue-500"
        >
            Enviar outro 
        </button>
        </>
    )
}