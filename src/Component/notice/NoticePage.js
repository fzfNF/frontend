import '../../App.css';
import React, {Component} from 'react';
import Header from '../header/Header';
import LiveClock from '../clock/LiveClock';

{/* LeftSide에 LiveClock 말고 다른 것도 추가할지는 모르겠음.
추가하지 않으면 LiveClock 위치 조정 필요.*/}

class NoticePage extends Component {
    render() {
        return(
            <div className = "MainNotice">
                <Header />
                <div className = "ShowNotice">
                    <div className = "LeftSide">
                        <LiveClock />
                    </div>
                    <div className = "NoticeBox">
                        <div className = "ReadNotice"></div>
                        <div className = "ReadNotice"></div>
                    </div>
                    <div className = "RightSide"></div>
                </div>
            </div>
        );
    }
}

export default NoticePage;