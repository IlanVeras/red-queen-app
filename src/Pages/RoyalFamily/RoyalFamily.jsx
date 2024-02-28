import { useState } from 'react'
import Header from "../../Components/Header/Header"
import ArrayPeople from '../../Components/ArrayPeople/ArrayPeople'
import peopleOfNorta from "../../assets/peopleOfNorta"
export default function RoyalFamily(){
        const [personName,setPersonName] = useState("Maven Merandus Calore")
        const [housePerson,setHousePerson] = useState("Calore")
        
        //families
        const calore = peopleOfNorta.silverHouses.calore
        const samos = peopleOfNorta.silverHouses.samos

        return (
          <div>
            <div  className='generalDiv'>
              <ArrayPeople array={calore}></ArrayPeople>
            </div>
          </div>
        )
}