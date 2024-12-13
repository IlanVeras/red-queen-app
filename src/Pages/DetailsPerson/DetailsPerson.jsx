import { useParams } from "react-router-dom"
import peopleOfNorta from "../../assets/peopleOfNorta"
import "./DetailsPerson.css"
export default function DetailsPerson(){
    const silverArray = []
    for(let key in peopleOfNorta.silverHouses){
        if(peopleOfNorta.silverHouses.hasOwnProperty(key)){
            let v = peopleOfNorta.silverHouses[key]
            silverArray.push(v.houseName)
        }
    }
    console.log(silverArray.includes("Arven"))
    const {familyName, id} = useParams()


    const familyNameStr = familyName.toLowerCase()
    const SilverOrRedArray = (str) => {
        if(str in peopleOfNorta.silverHouses){
            return peopleOfNorta.silverHouses[str]
        }else{
            return peopleOfNorta.RedOnes.newBloods[str]
        }
    }
    const generalArrayInformation = SilverOrRedArray(familyNameStr)
    const PersonSpecific = (identification) => {
        for(let person of generalArrayInformation.people){
            if(person.id === identification){
                return person
            }
        }
        return null
    }

    const properPerson = PersonSpecific(id)
    // console.log(generalArrayInformation)
    // properPerson.royal
    return(
        <div className="container-DetailsPerson Animate">
            <div className="container-name-DetailsPerson">
                <h1>{properPerson.name}</h1>
            </div>
            <div className="container-table-DetailsPerson">
                <table>
                    <tr>
                        <th>Status</th>
                        <td>{properPerson.status ? "alive" : "deceased"}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{properPerson.gender === "m" ? "male" : "female"}</td>
                    </tr>
                    <tr>
                        <th>Blood type</th>
                        <td>{silverArray.includes(generalArrayInformation.houseName) === true ? "Silver" : "Red"}</td>
                    </tr>
                    <tr>
                        <th>House</th>
                        <td>{generalArrayInformation.houseName}</td>
                    </tr>
                    <tr>
                        <th>Mother</th>
                        <td>{properPerson.mother ? properPerson.mother : `unkown`}</td>
                    </tr>
                    <tr>
                        <th>Father</th>
                        <td>{properPerson.father ? properPerson.father : `unkown`}</td>
                    </tr>
                </table>
            </div>
            <div>
            <p>
                {properPerson.name} {properPerson.royal ? "is a royal member, and" : "is"} a member of the {generalArrayInformation.category} from the Kingdom of Norta
            </p>
        </div>

            {/* PARÁGRAFO QUE DEVE MUDAR DE ACORDO COM AS CONDIÇÕES QUE DEFINIR */}
            {/* <div>
                <p>{properPerson.name} {properPerson.royal ? "is a royal member, and": "is"} a member of the {generalArrayInformation.category} from the Kingdom of Norta</p>
            </div> */}
        </div>
    )
}
