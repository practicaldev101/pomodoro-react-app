import React, { Component } from "react";
import "./Tabs.css";
import Tab from "./Tab"

export default class Toolbar extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }

    onClickTab = (tab)=>{
        this.setState({activeTab: tab});
    }

    render(){
        return(
            <div className="tabs">
                <div className="tab__list">
                    {this.props.children.map((child)=>{
                        const { label } = child.props;
                        return(
                            <Tab
                            activeTab={this.state.activeTab}
                            key={label}
                            label={label}
                            onClick={this.onClickTab}
                            />
                        )
                    })}
                </div>
                <div className="tab__content">
                    {
                        this.props.children.map((child)=>{
                            if(child.props.label !== this.state.activeTab) {
                                return undefined;
                            }
                            else{
                                return child.props.children
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}