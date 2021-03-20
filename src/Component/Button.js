import React from 'react'

 class Button extends React.Component {
    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default Button
