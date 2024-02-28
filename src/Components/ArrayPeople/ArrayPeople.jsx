import Card from "../Card/Card";

export default function ArrayPeople(props){
    return(
        <div>
            {
                props.array.people.map((person,key) => (
                    <Card key={key.toString()} personName={person.name} houseName={props.array.houseName} houseColors={props.array.houseColors}></Card>
                ))
            }
        </div>
    )
}