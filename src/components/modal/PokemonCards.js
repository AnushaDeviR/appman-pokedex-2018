import React, { useState } from 'react'
import PokemonCardItem from './PokemonCardItem'
import '../../style/pokemonCards.css'
export default function PokemonCards(props) {

    const cardList = props.cards



    //closes popup modal by clicking anywhere on the ipad screen
    const handleCloseModal = () => { 
        props.propsTrigger.setTrigger(false)
    }

    //searched by pokemon name and type
    const [filter, setFilter] = useState('')
    const searchByNameAndType = (event) => {
        setFilter(event.target.value);
    }

    let searchIcon = require('../../search.png') 

    const dataSearch = cardList.filter((card) => {
        return (card.name.toLowerCase().includes(filter.toLowerCase())||
                card.type.toLowerCase().includes(filter.toLowerCase() )
        )
    })

    return (
        <>
            <div className="outerModel" onClick = {handleCloseModal}> </div>
            <div className="pokeModal">
            <div className = "search">   <input placeholder="Find pokemon" className = "searchBox" onChange={searchByNameAndType} value={filter} />  <img src = {searchIcon}/>  </div> 
                <div className="cardsSection">
                    {dataSearch.map((card) => (
                        <>
                        <PokemonCardItem key={card.id} card={card} />
                        
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}