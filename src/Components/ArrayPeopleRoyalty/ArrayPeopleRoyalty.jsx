import Card from "../Card/Card";
import "./ArrayPeopleRoyalty.css"

export default function ArrayPeopleRoyalty(props){
    return(
        <div className="container-ArrayPeopleRoyalty">
            {
                props.array.peopleRoyalty.map((person,key) => (
                    <div className="second-container-Card">
                        <Card key={key.toString()} personName={person.name} houseName={props.array.houseName} houseColors={props.array.houseColors}></Card>
                    </div>
                ))
            }
        </div>
    )
}