import '../../App.css';
import React, {Component} from 'react';

class LiveClock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }
    render() {
        return(
            <div>
                <h1>현재 시각</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default LiveClock;