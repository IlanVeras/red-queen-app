import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Bubbles from './Components/Bubbles/Bubbles'
import ArrayPeople from './Components/ArrayPeople/ArrayPeople'
import FireAnimation from './Components/Animations/FireAnimation/FireAnimation'
import RoyalFamily from "./Pages/RoyalFamily/RoyalFamily"
import SilverFamilies from "./Pages/SilverFamilies/SilverFamilies"
import NewBloods from "./Pages/NewBloods/NewBloods"
import './App.css'
import peopleOfNorta from "./assets/peopleOfNorta"
// console.log(peopleOfNorta)
// console.log(peopleOfNorta.silverHouses.samos)

function App() {
  // const [personName,setPersonName] = useState("Maven Merandus Calore")
  // const [housePerson,setHousePerson] = useState("Calore")
  
  // //families
  // const calore = peopleOfNorta.silverHouses.calore
  // const samos = peopleOfNorta.silverHouses.samos

  // return (
  //   <div>
  //     <Header></Header>
  //     <div  className='generalDiv'>
  //       <ArrayPeople array={calore}></ArrayPeople>
  //     </div>
  //   </div>
  // )
  return(
    <>
      <Router>
      <div>
        {/* <Header /> */}
        <div className="container_Header">
            <h3>Kindom Of Norta</h3>
            <div>
                <ul className="menu_options">
                    <li><Link to="/">Royal Family</Link></li>
                    <li><Link to="/silvers">SilverHouses</Link></li>
                    <li><Link to="/newBloods">New Bloods</Link></li>
                </ul>
            </div>
        </div>
        <Routes>
          <Route path="/" element={<RoyalFamily />} />
          <Route path="/silvers" element={<SilverFamilies/>} />
          <Route path="/newBloods" element={<NewBloods />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

// function App(){
//   return(
//     <>
//     <FireAnimation></FireAnimation>
//     </>
//   )
// }

export default App
