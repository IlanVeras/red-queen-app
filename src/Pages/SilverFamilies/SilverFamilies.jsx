import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import Bubbles from "../../Components/Bubbles/Bubbles";
import Frame from "../../Components/Frame/Frame";
import Header from "../../Components/Header/Header"
import peopleOfNorta from "../../assets/peopleOfNorta"
import "./SilverFamilies.css"
export default function SilverFamilies(){
    const arrColors = []
    console.log(peopleOfNorta.silverHouses)
    for(const key in peopleOfNorta.silverHouses){
        if (peopleOfNorta.silverHouses.hasOwnProperty(key)) {
            const value = peopleOfNorta.silverHouses[key];
            arrColors.push({houseName: value.houseName, houseColors: value.houseColors})
          }
    }
    return(
        <div className="container-SilverFamilies Animate">
           {
            arrColors.map((f, key) => (
                <div id="second-container-SilverFamilies" key={key}>
                    <Frame>
                        <Link to={"/especificFamily/" + f.houseName}>
                            <Bubbles backGroundHouse={f.houseColors.backGroundHouse} bubble1={f.houseColors.color1} bubble2={f.houseColors.color2} bubble3={f.houseColors.color3}></Bubbles>
                        </Link>
                    </Frame>
                    <p id="houseName">{f.houseName}</p>
                </div>
            ))
           }
        </div>
    )
}