import React from 'react'
import Player from './Component/PlayerBoard'
import Button from './Component/Button'
import Dice from './Component/DiceDisplay'
import Goal from './Component/Goal'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = this.myState();
  }

  myState = () => {
    return {
      isPlayer1: true,
      dice: [1, 1],
      name: ['Gilad', 'Player2'],
      score: [0, 0],
      currentScore: [0, 0],
      goal: 12,
    }
  }

  setGoal = (newGoal) => {
    this.setState({goal: parseInt(newGoal) })

  }

  newGame = () => {
    console.log('new game')
       this.setState(this.myState());
  }

  componentDidUpdate() {
    if (this.state.score[0] >= this.state.goal) {      //the houndrents will be the goal target
     console.log('P1 Wins')
    } else if (this.state.score[1] >= this.state.goal) {
     console.log('P2 Wins')
    }
  }

  toggleTurns = () => {
    return (this.state.isPlayer1) ? this.setState({ isPlayer1: false }) : this.setState({ isPlayer1: true })
  }

  addCurrent = (num) => {
    let index;
    if (this.state.isPlayer1) {
      index = 0
    } else { index = 1 }
    let array = this.state.currentScore
    array[index] += num
    this.setState({ currentScore: array })
  }

  rollTheDice = () => {
    let d1 = Math.floor(Math.random() * 6 + 1);
    let d2 = Math.floor(Math.random() * 6 + 1);
    this.setState({ dice: [d1, d2] })
    if (d1 === d2) {
      this.setState({ currentScore: [0,0] })
      this.toggleTurns();
    } else {
      let sum = d1 + d2;
      this.addCurrent(sum);
    }
  
  }


  holdTurn = () => {
    let index;
    if (this.state.isPlayer1) {
      index = 0
    } else { index = 1 }
    let array = this.state.score
    let curent = this.state.currentScore;
    array[index] += curent[index]
    this.setState({ score: array })
    this.setState({ currentScore: [0, 0] })
    this.toggleTurns();
  }

  render() {
    return (
      <div className="App">
        <Player key={this.state.name[0]} name={this.state.name[0]}
         score={this.state.score[0]} current={this.state.currentScore[0]}
          myclass={this.state.isPlayer1} winner={this.state.Player1Win}/>
        <Button name="New Game" onClick={this.newGame} />
        <Dice dice1={this.state.dice[0]} dice2={this.state.dice[1]} />
        <Button name="Roll Dice" onClick={this.rollTheDice} />
        <Button name="Hold" onClick={this.holdTurn} />
        <Goal newGoal={this.setGoal} />
        <Button name="Set Goal" onClick={this.setGoal} />
        <Player key={this.state.name[1]} name={this.state.name[1]} 
        score={this.state.score[1]} current={this.state.currentScore[1]} 
        myclass={!this.state.isPlayer1} winner={this.state.Player2Win} />

      </div>
    )
  }
}

export default App


