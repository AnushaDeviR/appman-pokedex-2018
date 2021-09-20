import React, { useEffect, createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

//initial state of Pokedex; where 'selectedCards' local storage stores fav cards added from Pokemon Cards Modal

const initialState = {
    selectedCards: localStorage.getItem("selectedCards") ? JSON.parse(localStorage.getItem("selectedCards")) : [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("selectedCards", JSON.stringify(state.selectedCards));

    }, [state]);

    //Select and Unselect card button actions
    const addCard = card => {
        dispatch({ type: "ADD_CARD_TO_POKEDEX", payload: card })
    }
    const removeCard = card => {
        dispatch({ type: "REMOVE_CARD_FROM_POKEDEX", payload: card })
    }

    //Provides the context to children props

    return (
        <GlobalContext.Provider value={{
            selectedCards: state.selectedCards,
            addCard,
            removeCard,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

