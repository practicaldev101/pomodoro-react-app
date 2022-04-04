import React, { useState, useEffect } from "react";
import "./Timer.css"
import logo from "../tomato.png"
import {VscDebugStart} from "react-icons/vsc"
const Timer = ({startTime, breakTime}) =>{
    const [[hrs, mins, secs], setTime] = useState([startTime.hours,startTime.minutes,startTime.seconds]);
    const [[isStarted], setStart] = useState([false]);
    const [[isWorkTime], setWorking] = useState([true]);

    const tick = ()=> {
        if (hrs === 0 && mins === 0 && secs ===0){
            finished()
        }
        else if (mins === 0 && secs === 0){
            setTime([hrs - 1, 59, 59]);
        }
        else if (secs === 0){
            setTime([hrs, mins - 1, 59]);
        }
        else{
            setTime([hrs, mins,secs - 1]);
        }
    };

    const finished = ()=>{
        if (!isWorkTime){
            setStart([false]);
            setWorking([true])
            setTime([parseInt(startTime.hours), parseInt(startTime.minutes), parseInt(startTime.seconds)]);
            new Notification("Pomodoro App", {body: "Break time has finished.", icon: logo, dir: "ltr"})
        }
        else {
            setWorking([false])
            setTime([parseInt(breakTime.hours), parseInt(breakTime.minutes), parseInt(breakTime.seconds)]);
            new Notification("Pomodoro App", {body: "Working time has finished.", icon: logo, dir: "ltr"})
        }
        
    }

    useEffect(()=>{
        if (isStarted) {
            const timerId = setInterval(()=>tick(), 1000);
            return () => clearInterval(timerId);
        }
        
    });

    return (
        <div>
        <div className={isWorkTime ? "timer": "timer timer--breakTime"}>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
            
            <button 
            className={isStarted ? "timer__button timer__button--active": "timer__button"} 
            onClick={()=> setStart([true])} 
            disabled={isStarted ? true: false}>
                <VscDebugStart size={"40px"}/>
            </button>
            
        </div>
    )
}

export default Timer;