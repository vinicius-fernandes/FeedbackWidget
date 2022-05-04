import {Popover} from '@headlessui/react'
import { X } from 'phosphor-react'
export function CloseButton(){
    return (
        <Popover.Button className="top-5 absolute right-5 text-zinc-500 hover:text-zinc-100" title="Fechar formulário">
               <X weight="bold" className="w-3 h-3"></X>
        </Popover.Button>
    )
}