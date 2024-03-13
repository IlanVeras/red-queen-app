import { useParams } from "react-router-dom"
import peopleOfNorta from "../../assets/peopleOfNorta"
import "./DetailsPerson.css"
export default function DetailsPerson(){

    const {familyName} = useParams()
    const {id} = useParams()

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
        return "ERRO"
    }

    const properPerson = PersonSpecific(id)
    // console.log(generalArrayInformation)
    // properPerson.royal
    console.log(properPerson)
    return(
        <div>
            <h1>{properPerson.name}</h1>
            <div>
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
                        <td>Silver</td>
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
            {/* PARÁGRAFO QUE DEVE MUDAR DE ACORDO COM AS CONDIÇÕES QUE DEFINIR */}
            {/* <div>
                <p>{properPerson.name} {properPerson.royal ? "is a royal member, and": "is"} a member of the {generalArrayInformation.category} from the Kingdom of Norta</p>
            </div> */}
        </div>
    )
}

// function test(str){
//     if(str in objeto){
//         return objeto.str
//     }
//     return null
// }

// objeto = {
//     item1:{
//         t: [
//             {id: "abc"},
//             {id: "efg"},
//             {id: "hij"}
//         ]
//     },
//     item2:{
//         t: [
//             {id: "klm"},
//             {id: "nop"},
//             {id: "qrs"}
//         ]
//     },
//     item3:{
//         t: [
//             {id: "tuv"},
//             {id: "wxy"},
//             {id: "zab"}
//         ]
//     }
// }