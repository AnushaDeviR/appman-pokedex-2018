import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import CardPanelItem from './CardPanelItem';
import styled from 'styled-components';

const CardsPanel = styled.div`
  width: 1022px;
  height: 590px;
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding-left: 40px;
  padding-bottom: 50px;
  ;`

  //fetches the local stored state of selected cards from modal 
const CardPanel = () => {
    const { selectedCards } = useContext(GlobalContext);

    return (
        <>
        <CardsPanel>
            {selectedCards.length > 0 ? (
                <div className="cardsPanel">

                    {selectedCards.map((card) => (
                        <CardPanelItem card={card} type="selectedCards" />
                    ))}

                </div>
            ) : (<div className="cardsPanel">
            </div>)
            }
            </CardsPanel>
        </>
    )
}

export default CardPanel