import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Tab.css";


export default class Tab extends Component{
    
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    onClick = ()=>{
        const {label, onClick} = this.props;
        onClick(label);
    }


    render(){
        var classTab = "tab__item";

        if (this.props.label === this.props.activeTab){
            classTab = "tab__item tab__item--active";
        }
        return(
            <li className={classTab} onClick={this.onClick}>
                {this.props.label}
            </li>
        )
    }
}