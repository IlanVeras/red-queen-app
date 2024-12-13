import { useState } from 'react'
import Header from "../../Components/Header/Header"
import ArrayPeople from '../../Components/ArrayPeople/ArrayPeople'
import ArrayPeopleRoyalty from '../../Components/ArrayPeopleRoyalty/ArrayPeopleRoyalty'
import peopleOfNorta from "../../assets/peopleOfNorta"
import "./RoyalFamily.css"


export default function RoyalFamily(){
  //definido um array apenas de prateados
  const silvers = peopleOfNorta.silverHouses

  //convertendo o objeto 'peopleOfNorta' em um array para podermos trabalhar com as funções filter e map
  function peopleOfNortaArray(objParametro){
    return Object.values(objParametro)
  }

  //array que filtra da propriedade "people" apenas os que te a propeiedade 'royal' == true
  function genereteRoyalPeople(array){
    const royalty = array.people.filter(person => person.royal)
    return {...array, peopleRoyalty: royalty}
  }

  //função que verifica em cada casa a existência de alguém em peopleRoyalty
  function generateRoyalPeopleForHouses(houses){
    return houses.map(house => genereteRoyalPeople(house))
  }

  const silverHousesArray = peopleOfNortaArray(silvers)
  const silverHousesWithRoyalty = generateRoyalPeopleForHouses(silverHousesArray)

  return(
    <div className='second-container-ArrayPeople Animate'>
      {silverHousesWithRoyalty.map((house, index) => (
        <ArrayPeopleRoyalty key={index} array={house}></ArrayPeopleRoyalty>
      ))}
    </div>
  )
}













// export default function RoyalFamily(){

//         const silvers = peopleOfNorta.silverHouses

//         function peopleOfNortaArray(objeto) {
//           return Object.values(objeto);
//         }
        
        
//         const arraySilvers = []
//         const arrayRoyalty = []
//         const [personName,setPersonName] = useState("Maven Merandus Calore")
//         const [housePerson,setHousePerson] = useState("Calore")
        
//         //families
//         const calore = peopleOfNorta.silverHouses.calore
//         const samos = peopleOfNorta.silverHouses.samos
//         const merandus = peopleOfNorta.silverHouses.merandus
//         function generateRoyalPeople(array){
//           const royalty = array.people.filter(person => person.royal)
//           array.peopleRoyalty = royalty
//           arrayRoyalty.push(array)
//           return array
//         }

//         function t(a){
//           a.map((i, key) => {
//             // console.log(i.people)
//             return generateRoyalPeople(i)
//           })
//         }

//         const y = t(peopleOfNortaArray(silvers))
//         console.log(y)

        
//         //colocar apenas os da realeza em um array específico

//         return (
//             <div className='second-container-ArrayPeople'>
//               <ArrayPeopleRoyalty array={generateRoyalPeople(calore)}></ArrayPeopleRoyalty>
//               <ArrayPeopleRoyalty array={generateRoyalPeople(merandus)}></ArrayPeopleRoyalty>
//             </div>
//         )
// }

