import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Bubbles from './Components/Bubbles/Bubbles'
import ArrayPeople from './Components/ArrayPeople/ArrayPeople'
import './App.css'
import peopleOfNorta from "./assets/peopleOfNorta"
// console.log(peopleOfNorta)
// console.log(peopleOfNorta.silverHouses.samos)

function App() {
  const [personName,setPersonName] = useState("Maven Merandus Calore")
  const [housePerson,setHousePerson] = useState("Calore")
  
  //families
  const calore = peopleOfNorta.silverHouses.calore
  const samos = peopleOfNorta.silverHouses.samos

  return (
    <div>
      <Header></Header>
      <div  className='generalDiv'>
        <ArrayPeople array={calore}></ArrayPeople>
      </div>
    </div>
  )
}

export default App
