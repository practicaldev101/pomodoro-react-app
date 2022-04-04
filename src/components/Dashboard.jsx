import React, { Component } from "react";
import Tabs from "./Tabs";
import Timer from "./Timer"
import "./Dashboard.css";

import Form from "./Form";


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
        startTime: {hours:0, minutes: 25, seconds:0}, 
        breakTime: {hours:0, minutes: 5, seconds:0},
        isTimeWorkThirty: false,
        isTimeBreakTwenty: false};
    }

    componentDidMount(){
        Notification.requestPermission()
    }

    modifyStartTime = (time, selectedItem)=>{
        this.setState({isTimeWorkThirty: selectedItem, startTime: {hours: 0, minutes: time, seconds: 0}});    
    }

    modifyBreakTime = (time, selectedItem)=>{
        this.setState({isTimeBreakTwenty: selectedItem, breakTime: {hours: 0, minutes: time, seconds: 0}});    
    }

    render(){
        return(
            <div className="dashboard">
                <Tabs>
                    <div label="Inicio">
                    <div className="row row--h3">

                    </div>
                    <div className="row">
                        <div className="col">
                        <Timer startTime={this.state.startTime} breakTime={this.state.breakTime}/>
                        </div>
                    </div>
                    </div>
                    <div label="Configuración">
                        <Form modifyBreakTime={this.modifyBreakTime} modifyStartTime={this.modifyStartTime} isTimeWorkThirty={this.state.isTimeWorkThirty} isTimeBreakTwenty={this.state.isTimeBreakTwenty}/>
                    </div>
                </Tabs>
            </div>
        )
    }
}
