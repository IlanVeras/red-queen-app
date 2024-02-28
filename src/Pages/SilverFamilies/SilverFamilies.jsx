import Bubbles from "../../Components/Bubbles/Bubbles";
import Header from "../../Components/Header/Header"
import peopleOfNorta from "../../assets/peopleOfNorta"
export default function SilverFamilies(){
    console.log(peopleOfNorta.silverHouses)
    for(const key in peopleOfNorta.silverHouses){
        if (peopleOfNorta.silverHouses.hasOwnProperty(key)) {
            const value = peopleOfNorta.silverHouses[key];
            console.log(key, value);
          }
    }
    const calore = peopleOfNorta.silverHouses.calore
    return(
        <>
           <Bubbles backGroundHouse={calore.houseColors.backGroundHouse} bubble1={calore.houseColors.color1} bubble2={calore.houseColors.color2} bubble3={calore.houseColors.color3}></Bubbles>
        </>
    )
}