import "./Card.css"
export default function Card(props){
    return(
        <div className="container_Card">
            <div  className="name_person">
                <p>{props.personName}</p>
            </div>
            <div className="container_house">
                <p>{props.housePerson}</p>
                <div className="container_img_house"></div>
            </div>
            <div className="container_btn_Card">
                <button className="btn_Card">More</button>
            </div>
        </div>
    )
}