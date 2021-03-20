import React from 'react'

 class Goal extends React.Component {
     setNewGoal = (e) => {
         this.props.newGoal(e.target.value)
     }
    render() {
        return (
            <div className="goal">
                <label>Insert Goal</label>
                <input type="text" onChange={this.setNewGoal} ></input>
            </div>
        )
    }
}

export default Goal