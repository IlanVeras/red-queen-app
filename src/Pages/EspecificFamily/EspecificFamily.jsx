import { useParams } from "react-router-dom"
import "./EspecificFamily.css"
import peopleOfNorta from "../../assets/peopleOfNorta"
import ArrayPeople from "../../Components/ArrayPeople/ArrayPeople"
export default function EspecificFamily(){
    const {familyName} = useParams()
    const familyStr = familyName.toLowerCase()
    const arrayFamily = peopleOfNorta.silverHouses[familyStr]
    console.log(peopleOfNorta)
    console.log(arrayFamily)
    return(
        <>
            <p>House Of {familyName}</p>
            <p>House Of {arrayFamily.category}</p>
            <p>Abilities</p>
            <div>
            {arrayFamily.abilities.map(abilitie => (
                <p>{abilitie}</p>
            ))}
            </div>
            <div>
                <ArrayPeople array={arrayFamily}></ArrayPeople>
            </div>
        </>
    )
}