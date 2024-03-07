import Card from "../Card/Card";
import "./ArrayPeople.css"

export default function ArrayPeople(props){
    return(
        <div className="container-ArrayPeople">
            {
                props.array.people.map((person,key) => (
                    <div className="second-container-Card-People">
                        <Card key={key.toString()} personName={person.name} houseName={props.array.houseName} houseColors={props.array.houseColors}></Card>
                    </div>
                ))
            }
        </div>
    )
}