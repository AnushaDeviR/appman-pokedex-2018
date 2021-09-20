import React, { useContext, useState, useEffect} from 'react'
import '../../style/pokemonCards.css'
import { GlobalContext } from "../../context/GlobalContext" 
import Card from "../Card"
import '../../style/cardStyling.css'


export default function PokemonCardItem  ({ card })  {

  const { addCard, selectedCards } = useContext(GlobalContext)

  //card is removed from the modal when id of the object and card matches 

  let storedCard = selectedCards.find(o => o.id === card.id)
  const disableCard = storedCard ? true : false;

  //adds the selected card onto the local storage and displays it on pokedex

  const handleClick = () => {
      addCard(card)
  }

  //Damage Level Calculation 
  let damage = 0;
  const damageCalc = () => {
    let attacks;
    if (card.hasOwnProperty("attacks")) {
      attacks = card.attacks;
      if (attacks.length > 1) {
        attacks.map((attack) => {
          let damageValue = attack.damage;
          if (damageValue !== "") {
            damage += parseInt(damageValue.replace(/[+×]/, ""));
          } else {
            damage += 0;
          }
        });
      } else {
        damage = attacks[0].damage.replace(/[+×]/, "");
      }
    }
    return damage;
  };

  //HP Level Calculation
  const hpCal = () => { 
    const hpVal = card.hp > 100 ? 100 : 0;

    if(hpVal > 100) { 
        return 100
    }else { 
          return hpVal
      }
  }
  
  //Strength Level Calculation
  const strengthCalc = () => {
      
      const strengthVal = card.hasOwnProperty("attacks")
      ? card.attacks.length * 50
      : 0;

      if (strengthVal <= 0 || strengthVal > 100) {
        return 0;
      } else {
        return strengthVal;
      }
  };

  //Weakness Level Calculation

  const weakness = card.hasOwnProperty("weaknesses")
  ? card.weaknesses.length
  : 0;

  const weaknessCalc = () => {
      if (weakness > 100 || weakness <= 0) {
        return 0;
      } else {
        return weakness * 100;
      }
  };

  //Happiness Level Calculation
   const happinessCalc = () => {
      damageCalc();
      weaknessCalc();
      console.log(card.hp + " " + damage + " " + weakness);
      return Math.round(
        ((card.hp !== "None" ? card.hp : 0) / 10 +
          damage / 10 +
          10 -
          weakness) /
          5
      );
    };
    let happinessEmoji = require('../../cute.png') 
    let happinessValue = happinessCalc()
    let happiness = [] 

    for (let i = 0; i < happinessValue; i++) { 
    happiness.push(happinessValue[i])
    happiness.push(<img src = {happinessEmoji} style={{width: "50px"}}/>)
    }

  //if the card has been selected and is true, the card is replaced by an empty div element
  return (
    <>
      {disableCard === true ? (<div> </div>) :
      
          ( 
          <>
            <Card btn = {handleClick} 
                  term = "Add"
                  moveCardToDex = {disableCard}
                  name = {card.name}
                  src = {card.imageUrl}
                  hpProgressBar={hpCal()}
                  strProgressBar={strengthCalc()}
                  weakProgressBar={weaknessCalc()}
                  happinessEmoji = {happiness}
              />
            </>                   
          )}
      </>
  )
}
