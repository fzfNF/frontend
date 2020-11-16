import '../../App.css';
import React, {Component} from 'react';
import Header from '../header/Header';
import LiveClock from '../clock/LiveClock';

class LunchTable extends Component {
    render() {
        return(
            <div className = "MainLunchTable">
                <Header />
                <div className= "LunchBox">
                    <div className = "ShowLunch">1<br />2<br />3<br />4<br />5<br /></div>
                    <div className = "ShowLunch">1<br />2<br />3<br />4<br />5<br /></div>
                    <div className = "ShowLunch">1<br />2<br />3<br />4<br />5<br /></div>
                    <div className = "ShowLunch">1<br />2<br />3<br />4<br />5<br /></div>
                    <div className = "ShowLunch">1<br />2<br />3<br />4<br />5<br /></div>
                </div>
                <div className = "LunchTime"><LiveClock /></div>
            </div>
        );
    }
}

export default LunchTable;