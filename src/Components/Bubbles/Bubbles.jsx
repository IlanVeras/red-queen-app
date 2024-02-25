import FireAnimation from "../Animations/FireAnimation/FireAnimation";
import "./Bubbles.css"
import React from "react";

export default function Bubbles(){
    return(
        <div className="container-Bubble">
            {/* <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div className="bg-shape3 bg-secondary opacity-50 bg-blur"></div> */}
            <FireAnimation></FireAnimation>
        </div>
    )
}