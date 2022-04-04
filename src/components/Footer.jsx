import React from "react";
import "./Footer.css";
import {FaGithub, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = ()=>{
    return(
        <div className="footer">
            <p></p>
            <ul className="list__items">
                <li className="item">Credits: <code>Practical Programmer</code></li>
                <li className="item">
                <a href="https://github.com/practicaldev101">
                    <FaGithub size={"20px"}/>
                </a>
                </li>
                <li className="item">
                    <a href="https://www.instagram.com/practical_dev/">
                        <FaInstagram size={"20px"}/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://www.youtube.com/channel/UCk6a5c-G9dIpBDwrBTATgBw">
                        <FaYoutube size={"20px"}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;