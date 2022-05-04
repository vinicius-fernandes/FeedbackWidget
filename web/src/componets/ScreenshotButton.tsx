import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";
interface ScreenshotButtonProps{
    onScreenshotTaken:(screenshoot:string|null)=>void;
    screenshot:string|null;
}
export function ScreenshotButton({screenshot,onScreenshotTaken} :ScreenshotButtonProps){
    const [isTakingScreenshot,setIsTakingScreenshot]= useState(false);
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64img = canvas.toDataURL('image/png');
        onScreenshotTaken(base64img);
        setIsTakingScreenshot(false);
    }
    if(screenshot!=null){
        return(
        <button
        type="button"
        onClick={()=>onScreenshotTaken(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
            backgroundImage:`url(${screenshot})`
        }}
        >
            <Trash weight="fill"/>
        </button>
        )
    }
    return(
        <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-zinc-800 mb-1 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
            {isTakingScreenshot ?(<Loading/>):(<Camera className="h-6 w-6" />)}
        </button>
       
    )
}