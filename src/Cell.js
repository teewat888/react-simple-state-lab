import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.value
        }
    }
    changeColor = () => {
        console.log('pressed');
        this.setState(
            {
                color: '#333'
            }
        );
        console.log('state ',this.state.color);
    }
    render() {
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
    }
}