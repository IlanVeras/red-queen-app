import { useParams } from "react-router-dom"
import "./EspecificFamily.css"
import peopleOfNorta from "../../assets/peopleOfNorta"
import ArrayPeople from "../../Components/ArrayPeople/ArrayPeople"
export default function EspecificFamily(){
    console.log(peopleOfNorta)
    const {familyName} = useParams()
    const familyStr = familyName.toLowerCase()
    const arrayFamily = peopleOfNorta.silverHouses[familyStr]
    console.log(peopleOfNorta)
    console.log(arrayFamily)
    return(
        <div className="container-EspecificFamily">
            <div className="container-paragrafs">
                <h2>House Of {familyName}</h2>
                <h3>House Of {arrayFamily.category}</h3>
                <p>Abilities</p>
            </div>
            <div>
            <div id="paragraf-abilities">
                {arrayFamily.abilities.map(abilitie => (
                        <p>{abilitie}</p>
                ))}
            </div>
            </div>
            <div className="second-container">
                <ArrayPeople array={arrayFamily}></ArrayPeople>
            </div>
        </div>
    )
}