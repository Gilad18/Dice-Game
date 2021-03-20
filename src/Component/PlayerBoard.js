import React from 'react'

 class PlayerBoard extends React.Component {
    render() {
        return (
            <div>
                <div className="playerDisplay">
                    <h1 >{this.props.name}</h1>
                    <h1>Score: <span>{this.props.score}</span></h1>
                    <h1>Current: {this.props.current}</h1>
                </div>
            </div>
        )
    }
}

export default PlayerBoard
