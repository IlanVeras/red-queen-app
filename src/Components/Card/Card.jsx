import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import Bubbles from "../Bubbles/Bubbles"
import "./Card.css"
export default function Card(props){
    // console.log(props)
    return(
        <div className="container_Card">
            <div  className="name_person">
                <p>{props.personName}</p>
            </div>
            <div className="container_house">
                <p>House Of {props.houseName}</p>
                <Bubbles backGroundHouse={props.houseColors.backGroundHouse} bubble1={props.houseColors.color1} bubble2={props.houseColors.color2} bubble3={props.houseColors.color3}></Bubbles>
            </div>
            <div className="container_btn_Card">
                <Link to={"/person/" + props.houseName + "/" + props.personId}><button className="btn_Card">More</button></Link>
            </div>
        </div>
    )
}