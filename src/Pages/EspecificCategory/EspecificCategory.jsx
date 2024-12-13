import { useParams } from "react-router-dom"
import "./EspecificCategory.css"
import ArrayRedPeople from "../../Components/ArrayRedPeople/ArrayRedPeople"
import peopleOfNorta from "../../assets/peopleOfNorta"
export default function EspecificCategory(){
    const {familyName} = useParams()
    console.log(familyName)
    const categoryStr = familyName.toLowerCase()
    const arrayCategory = peopleOfNorta.RedOnes.newBloods[categoryStr]
    return(
        <div className="container-EspecificFamily Animate">
        
            <div className="container-paragrafs">
                <h2>Especific Category Of New Bloods</h2>
                <h2>House Of {familyName}</h2>
                <p>Abilities</p>
            </div>
            <div id="paragraf-abilities">
                {arrayCategory.abilities.map((abilitie, key) => (
                    <p>{abilitie}</p>
                ))}
            </div>
            <div className="second-container">
                <ArrayRedPeople array={arrayCategory}></ArrayRedPeople>
            </div>
        </div>
    )
}