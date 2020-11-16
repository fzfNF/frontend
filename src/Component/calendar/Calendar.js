import '../../App.css';
import React, {Component} from 'react';
import Header from '../header/Header';

{/* 데이터 가져오면 일정 앞에 ★표시 붙여놓기. */}

class Calendar extends Component {
    render() {
        return(
            <div className = "MainCalendar">
                <Header />
                <table className = "Calendar">
                    <tr className = "TextLine">
                        <td>◀</td>
                        <td colspan = "5">12월</td>
                        <td>▶</td>
                    </tr>
                    <tr className = "TextLine">
                        <td>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                    </tr>
                    <tr>
                        <td>
                            <div className = "Schedule">1</div>
                            <div className = "Schedule">일정</div>
                        </td>
                        <td>
                            <div className = "Schedule">2</div>
                            <div className = "Schedule">일정</div>
                        </td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Calendar;