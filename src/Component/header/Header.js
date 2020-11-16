import '../../App.css';
import Logo from '../../sesori_sample2.png';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Calendar from '../calendar/Calendar';

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



/*
<div className = "ClickHeader">공지사항</div>
<div className = "ClickHeader">급식표</div>
<div className = "ClickHeader">시간표</div>
<div className = "ClickHeader">학사일정</div>
<div className = "ClickHeader">대나무숲</div>





<Router>
                        <Link to = '/calendar'>
                            <div className = "ClickHeader">학사일정</div>
                        </Link>
                        <Switch>
                            <Route path = '/calendar' component = {Calendar} />
                        </Switch>
                    </Router>
*/