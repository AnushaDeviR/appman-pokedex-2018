import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../style/pokemonCards.css'
import PokemonCards from './PokemonCards'

export default function FetchCards(props) {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(
            'http://localhost:3030/api/cards'
        ).then((respone) => {
            setCards(respone.data.cards)
            console.log(respone.data.cards)

        })
    }, [])


    return (props.trigger) ?
        (
            <>
                <PokemonCards cards={cards} propsTrigger={props} />
            </>
        ) : " ";
        
}




