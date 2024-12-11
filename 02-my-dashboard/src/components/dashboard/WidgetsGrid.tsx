'use client'

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget"
import { AiOutlineQq } from "react-icons/ai";



export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title= {  `${isCart}` } 
            subTitle= "Subtitulo"
            icon= {<AiOutlineQq size={50} className="text-blue-500"/>}
            label= "Contador"
            href= '/dashboard/counter'
        /> 
    </div>
  )
}
