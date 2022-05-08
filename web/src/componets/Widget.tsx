import {ChatCircleDots} from 'phosphor-react';
import {Popover} from '@headlessui/react'
import { WidgetForm } from './WidgetForm/Index';
export function Widget(){

    return (
        <Popover className="absolute bottom-10 right-5 flex flex-col items-end">
        <Popover.Panel><WidgetForm/></Popover.Panel>
        
        <Popover.Button  className="bg-blue-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatCircleDots className="w-6 h-6"/>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
                <span className="pl-2"></span>
                Feedback
            </span>
        </Popover.Button>
        </Popover>
    )
}