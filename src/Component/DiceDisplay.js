
import React from 'react'


 class DiceDisplay extends React.Component {

  
    render() {

        const diceUrl = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.props.dice1}.png?raw=true`
        const diceUrl2 = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.props.dice2}.png?raw=true`
        return (
            <div>
                <div className="diceDisplay">
                    <div className="dice" style={{backgroundImage:`url(${diceUrl})`}}></div>
                    <div className="dice" style={{backgroundImage:`url(${diceUrl2})`}} ></div>
                </div>
            </div>
        )
    }
}

export default DiceDisplay