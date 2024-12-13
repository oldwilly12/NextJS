import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";


export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    // Funcion a despachar y se regresa adicionalmente la action
    return (next : Dispatch ) => (action : Action ) => {
        console.log({ state });
    }

    //Esta es un middleeare que intercepta cuqlquier la accion hacia el state y no hace nada bloquea
}



