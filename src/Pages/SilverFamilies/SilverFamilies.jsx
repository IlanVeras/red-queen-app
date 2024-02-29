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
            console.log(key, value);
            arrColors.push({houseName: value.houseName, houseColors: value.houseColors})
            console.log(arrColors)
          }
    }
    return(
        <div className="container-SilverFamilies">
           {
            arrColors.map(f => (
                <Frame>
                    <Bubbles backGroundHouse={f.houseColors.backGroundHouse} bubble1={f.houseColors.color1} bubble2={f.houseColors.color2} bubble3={f.houseColors.color3}></Bubbles>
                </Frame>
            ))
           }
        </div>
    )
}