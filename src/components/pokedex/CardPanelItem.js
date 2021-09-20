import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext" 
import Card from "../Card"

const CardPanelItem = ({ card, type }) => {

  // unselects the card from pokedex and displays it back on the card modal 
  const { removeCard } = useContext(GlobalContext)
  const handleClick = () => {
      removeCard(card.id)
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

  //unselect card validating by imageURL
  return (
      <>
          {card.imageUrl ? (
              <><Card btn = {handleClick} 
                      term = "X"
                      moveCardToDex = {removeCard}
                      name = {card.name}
                      src = {card.imageUrl}
                      hpProgressBar={hpCal()}
                      strProgressBar={strengthCalc()}
                      weakProgressBar={weaknessCalc()}
                      happinessEmoji = {happiness}
                  />
                  </>
          ) : (<div> </div>)}
      </>
  )

}

export default CardPanelItem