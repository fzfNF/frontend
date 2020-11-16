import '../../App.css';
import React, {Component} from 'react';
import Logo from '../../sesori_sample2.png';

class Header extends Component {
    render() {
        return(
            <div className = "HeaderBox">
                <img className = "Sesori" src = {Logo} />
                <div className = "MenuBox">
                    <div className = "ClickHeader">공지사항</div>
                    <div className = "ClickHeader">급식표</div>
                    <div className = "ClickHeader">시간표</div>
                    <div className = "ClickHeader">학사일정</div>
                    <div className = "ClickHeader">대나무숲</div>
                </div>
            </div>
        );
    }
}

export default Header;