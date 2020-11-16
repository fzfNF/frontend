import '../../App.css';
import React, {Component} from 'react';
import Header from '../header/Header';

{/* 시간표 요일마다 보기 편하게 색상 추가. 되도록 너무 밝은 색은 아니게 */}

class TimeTable extends Component {
    render() {
        return(
            <div className = "MainTimeTable">
                <Header />
                <table className = "TimeTable">
                    <tr>
                        <td></td>
                        <td className = "Mon">월</td>
                        <td className = "Tue">화</td>
                        <td className = "Wed">수</td>
                        <td className = "Thu">목</td>
                        <td className = "Fri">금</td>
                    </tr>
                    <tr>
                        <td>1교시</td>
                        <td className = "Mon">일본어</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                    <tr>
                        <td>2교시</td>
                        <td className = "Mon">과목</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                    <tr>
                        <td>3교시</td>
                        <td className = "Mon">과목</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                    <tr>
                        <td>4교시</td>
                        <td className = "Mon">과목</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                    <tr>
                        <td>5교시</td>
                        <td className = "Mon">과목</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                    <tr>
                        <td>6교시</td>
                        <td className = "Mon">과목</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                    <tr>
                        <td>7교시</td>
                        <td className = "Mon">과목</td>
                        <td className = "Tue">과목</td>
                        <td className = "Wed">과목</td>
                        <td className = "Thu">과목</td>
                        <td className = "Fri">과목</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TimeTable;