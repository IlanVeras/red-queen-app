import FireAnimation from "../Animations/FireAnimation/FireAnimation";
import "./Bubbles.css"
import React from "react";

export default function Bubbles(props){
    return(
        <div style={{background: props.backGroundHouse}} className="container-Bubble">
            {/* style={{backgroundColor: 'blue'}} */}
            <div style={{backgroundColor: props.bubble1}} className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div style={{backgroundColor: props.bubble2}} className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div style={{backgroundColor: props.bubble3}} className="bg-shape3 bg-secondary opacity-50 bg-blur"></div>
            {/* <FireAnimation></FireAnimation> */}
        </div>
    )
}