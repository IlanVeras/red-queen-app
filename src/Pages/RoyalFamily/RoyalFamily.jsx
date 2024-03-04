import { useState } from 'react'
import Header from "../../Components/Header/Header"
import ArrayPeople from '../../Components/ArrayPeople/ArrayPeople'
import ArrayPeopleRoyalty from '../../Components/ArrayPeopleRoyalty/ArrayPeopleRoyalty'
import peopleOfNorta from "../../assets/peopleOfNorta"
import "./RoyalFamily.css"
console.log(peopleOfNorta)
export default function RoyalFamily(){

        const silvers = peopleOfNorta.silverHouses

        function peopleOfNortaArray(objeto) {
          return Object.values(objeto);
        }
        
        // console.log(peopleOfNortaArray(silvers));
        
        const arraySilvers = []
        const arrayRoyalty = []
        const [personName,setPersonName] = useState("Maven Merandus Calore")
        const [housePerson,setHousePerson] = useState("Calore")
        
        //families
        const calore = peopleOfNorta.silverHouses.calore
        const samos = peopleOfNorta.silverHouses.samos
        const merandus = peopleOfNorta.silverHouses.merandus
        console.log(merandus)
        function generateRoyalPeople(array){
          const royalty = array.people.filter(person => person.royal)
          array.peopleRoyalty = royalty
          return array
        }

        //colocar apenas os da realeza em um array específico

        return (
            <div className='second-container-ArrayPeople'>
              <ArrayPeopleRoyalty array={generateRoyalPeople(calore)}></ArrayPeopleRoyalty>
              <ArrayPeopleRoyalty array={generateRoyalPeople(merandus)}></ArrayPeopleRoyalty>
            </div>
        )
}

