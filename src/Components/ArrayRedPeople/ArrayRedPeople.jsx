import Card from "../Card/Card";
import "./ArrayRedPeople.css"

export default function ArrayRedPeople(props){
    return(
        <div className="container-ArrayRedPeople">
            {
                props.array.people.map((person,key) => (
                    <Card key={key.toString()} personId={person.id} personName={person.name} houseName={props.array.category} houseColors={props.array.houseColors}></Card>
                ))
            }
        </div>
    )
}