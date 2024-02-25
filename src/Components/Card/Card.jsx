import Bubbles from "../Bubbles/Bubbles"
import "./Card.css"
export default function Card(props){
    return(
        <div className="container_Card">
            <div  className="name_person">
                <p>{props.personName}</p>
            </div>
            <div className="container_house">
                <p>House Of {props.houseName}</p>
                <Bubbles></Bubbles>
            </div>
            <div className="container_btn_Card">
                <button className="btn_Card">More</button>
            </div>
        </div>
    )
}