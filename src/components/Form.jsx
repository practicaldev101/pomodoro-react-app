import React, {Component} from "react";
import minutes_15 from "../15.png"
import minutes_30 from "../30.png"
import "./Form.css"


export default class Configuration extends Component{

    constructor(props){
        super(props);

        this.state = {
            timeWork: 30,
            timeBreak: 5,
            isTimeWorkThirty: this.props.isTimeWorkThirty,
            isTimeBreakTwenty: this.props.isTimeBreakTwenty
        };
        this.inputHandleChange = this.inputHandleChange.bind(this)
    }

    clickedTimeWork(){
        if(this.state.isTimeWorkThirty){
            this.props.modifyStartTime(25, false);
        }
        else if (!this.state.isTimeWorkThirty){
            this.props.modifyStartTime(30, true)
        }    
    }
    clickedTimeBreak(){
        if (this.state.isTimeBreakTwenty){
            this.props.modifyBreakTime(5, false)
        }
        else{
            this.props.modifyBreakTime(15, true)
        }
    }

    inputHandleChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name;

        this.setState({[name]: value})  

    }

    render(){
        
        return (
            <div>
                <form>
                    <div className="group">
                        <h3>Working time</h3>
                        <label htmlFor="work__time"  >
                            <img className={this.state.isTimeWorkThirty ? "checkbox checkbox--checked": "checkbox"} src={minutes_30} alt="30 minutes"/>
                        </label>
                        <input type="checkbox" 
                        id="work__time" 
                        name="isTimeWorkThirty" 
                        onChange={this.inputHandleChange} 
                        onClick={this.clickedTimeWork.bind(this)}
                        checked={this.state.isTimeWorkThirty}  hidden/>
                    </div>
                    <div className="group">
                        <h3>Break time</h3>
                        <label htmlFor="break__time"  >
                            <img className={this.state.isTimeBreakTwenty ? "checkbox checkbox--checked": "checkbox"} src={minutes_15} alt="30 minutes"/>
                        </label>
                        <input type="checkbox" 
                        id="break__time" 
                        name="isTimeBreakTwenty" 
                        onChange={this.inputHandleChange} 
                        onClick={this.clickedTimeBreak.bind(this)}
                        checked={this.state.isTimeBreakTwenty}  hidden/>
                    </div>
                </form>
            </div>
        )
    
    }
}
