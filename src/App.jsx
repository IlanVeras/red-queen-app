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
import EspecificFamily from "./Pages/EspecificFamily/EspecificFamily"
import EspecificCategory from "./Pages/EspecificCategory/EspecificCategory"
import DetailsPerson from "./Pages/DetailsPerson/DetailsPerson"
import './App.css'
import peopleOfNorta from "./assets/peopleOfNorta"
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
      <div className="Animate">
        <div className="container_Header">
            <h3 id="titKingdom">Kindom Of Norta</h3>
            <div>
                <ul className="menu_options">
                    <li><Link to="/" className="linkMy">Royal Family</Link></li>
                    <li><Link to="/silvers" className="linkMy">SilverHouses</Link></li>
                    <li><Link to="/newBloods" className="linkMy">New Bloods</Link></li>
                </ul>
            </div>
        </div>
        <Routes>
          <Route path="/" element={<RoyalFamily />} />
          <Route path="/silvers" element={<SilverFamilies/>} />
          <Route path="/newBloods" element={<NewBloods />} />
          <Route path="/especificFamily/:familyName" element={<EspecificFamily/>}></Route>
          <Route path="/especificCategory/:familyName" element={<EspecificCategory/>}></Route>
          <Route path="/person/:familyName/:id" element={<DetailsPerson/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}


export default App
