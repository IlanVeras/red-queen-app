import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import './App.css'
import peopleOfNorta from "./assets/peopleOfNorta"
console.log(peopleOfNorta)
console.log(peopleOfNorta.silverHouses.samos)
function App() {
  const [personName,setPersonName] = useState("Maven Merandus Calore")
  const [housePerson,setHousePerson] = useState("Calore")
  
  //families
  const calore = peopleOfNorta.silverHouses.calore
  const samos = peopleOfNorta.silverHouses.samos

  return (
    <div>
      <Header></Header>
      {/* <Card personName={calore.people[1].name} housePerson={calore.houseName}></Card> */}
      <div  className='generalDiv'>
        {
          calore.people.map((person) => {
            return(
            <Card personName={person.name} housePerson={person.houseName}></Card>)
          })
        }
      </div>
    </div>
  )
}

export default App
