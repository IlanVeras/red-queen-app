import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import peopleOfNorta from "../../assets/peopleOfNorta"
import Header from "../../Components/Header/Header"
import Frame from "../../Components/Frame/Frame"
import Bubbles from "../../Components/Bubbles/Bubbles"
import "./NewBloods.css"

export default function NewBloods(){
    const redOnes = peopleOfNorta.RedOnes
    const newBloods = redOnes.newBloods
    const arrColors = []
    for(const key in newBloods){
        if(newBloods.hasOwnProperty(key)){
            const value = newBloods[key]
            arrColors.push({houseName: value.category, houseColors: value.houseColors})
        }
    }
    console.log(newBloods)
    return(
        <div className="container-NewBloods Animate">
            {
                arrColors.map((f, key) => (
                    <div id="second-container-NewBloods" key={key}>
                        <Frame>
                            <Link to={"/especificCategory/" + f.houseName}>
                                <Bubbles backGroundHouse={f.houseColors.backGroundHouse}
                                bubble1={f.houseColors.color1}
                                bubble2={f.houseColors.color2}
                                bubble3={f.houseColors.color3}>
                                </Bubbles>
                            </Link>
                        </Frame>
                        <p id="houseName">{f.houseName}</p>
                    </div>
                ))
            }
        </div>
    )
}