import React from "react";
import styled from 'styled-components';
import '../style/palette.css'
import ProgressBar from "./ProgressBar";

const PokeCard = styled.div`
  display: flex;
  position: relative;
  background-color: #f3f4f7;
  border-radius: 10px;
  box-shadow: 0 3px 10px var(--cardBoxShadow);
  padding: 25px;
  margin: 50px 10px 10px 10px;
  width: 880px;
  height: 350px;
`;

const PokemonDetails = styled.div` 
    text-align: left;
    margin-left: 50px;
;`

const Button = styled.div`
    text-decoration: none;
    margin-left:100px;
    color: var(--colorButton);
    font-size: 1.5rem;
    float: right;
    display: none; 
    ${PokeCard}:hover & { 
        display: block;
        cursor: pointer;
        
    }
;`

    const HappinessLevel = styled.div`
    ;`

    const PokemonLevels = styled.div`
    display: flex;
    flex-direction: column;
    ;`

    const Level = styled.div`
    display: flex; 
    justify-conter: center;
    align-item: center;
    gap: 20px;
    ;`

export default function Card(props) {

    return( 
        <> 
            <PokeCard> 
                    
                <img src={props.src} />
                
                <PokemonDetails> 
                    
                    <PokemonLevels> 
                        <h2>{props.name} </h2>
                        <Level> 
                        <h2 style= {{width: "100px"}}>HP</h2>
                        <ProgressBar level={props.hpProgressBar}/>
                        </Level>
                        <Level> 
                        <h2 style= {{width: "100px"}}>STR</h2>
                        <ProgressBar level={props.strProgressBar}/>
                        </Level> 
                        <Level> 
                        <h2 style= {{width: "100px"}}>WEAKS</h2>

                        <ProgressBar level={props.weakProgressBar}/>

                        </Level>
                        <HappinessLevel>  {props.happinessEmoji} </HappinessLevel>
                    </PokemonLevels>
                </PokemonDetails>

                <Button onClick={props.btn}
                        disabled={props.moveCardToDex}>{props.term}
                </Button>
            </PokeCard>
        </>
    )
}
