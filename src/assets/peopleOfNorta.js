const peopleOfNorta = {
    silverHouses: {
        arven: {
            abilities: [
                "nullify the powers of other silvers and new bloods"
            ],
            category: "silencers",
            houseColors: {
                backGroundHouse: "white",
                color1: "rgb(0, 92, 23)", // Verde Musgo
                color2: "rgb(44, 153, 72)", // Branco Suavizado
                color3: "rgb(0, 92, 23)"
            },
            houseName: "Arven",
            weeknesses: [

            ],
            people: [
                {}
            ]
        },
        blonos: {
            abilities: [],
            category: "blood healers",
            houseColors: {
                backGroundHouse: "white",
                color1: "rgb(255, 242, 249)",
                color2: "rgb(255, 0, 234)",
                color3: "rgb(255, 0, 106)"
            },
            houseName: "Blonos",
            weaknesses: [
                
            ],
            people: []
        },
        calore: {
            abilities: [
                "control over fire and higher temperatures",
                "immunity against fire",
                "immunity against coldness"
            ],
            category: "burners",
            houseColors: {
                backGroundHouse: "radial-gradient(circle, #4a0700, #000)",
                color1: "#FF7F00",
                color2: "yellow",
                color3: "red"
            },
            houseName: "Calore",
            weaknesses: [
                "water"
            ],
            people: [
                {
                    name: "Tiberias Jacos Calore VII",
                    father: "Tiberias Calore VI",
                    mother: "Coriane Jacos Calore",
                    status: true,
                    royal: true,
                    gender: "m"
                },
                {
                    name: "Maven Merandus Calore",
                    father: "Tiberias Calore VI",
                    mother: "Elara Merandus Calore",
                    status: true,
                    royal: true,
                    gender: "f"
                }
            ]
        },
        carros: {
            abilities: [],
            category: "Strongarms",
            houseColors: {
              backGroundHouse: "radial-gradient(circle, #8B4513, #000)",
              color1: "rgb(163, 126, 76)",
              color2: "rgb(255, 176, 73)",
              color3: "yellow",
            },
            houseName: "Carros",
            weaknesses: [],
            people: [
              {
                name: "Cantos Carros",
                father: "",
                mother: "",
                status: false,
                royal: false,
                gender: "m",
              },
            ],
          },          
        samos: {
            abilities: [
                "control over Metal and Magnetism",
                "strong relationship with anny type of metal"
            ],
            category: "magnetrons",
            houseColors: {
                backGroundHouse: "black",
                color1: "#A9A9A9",
                color2: "#D3D3D3",
                color3: "#C0C0C0"
            },
            houseName: "Samos",
            weaknesses: [
                
            ],
            people: [
                {
                    name: "Volo Samos",
                    father: "",
                    mother: "",
                    status: true,
                    royal: false,
                    gender: "m"
                },
                {
                    name: "Ptolemus Viper Samos",
                    father: "Volo Samos",
                    mother: "Larentia Viper",
                    status: true,
                    royal: false,
                    gender: "m"
                },
                {
                    name: "Evangeline Viper Samos",
                    father: "Volo Samos",
                    mother: "Larentia Viper",
                    status: true,
                    royal: true,
                    gender: "f"
                }
            ]
        },
        merandus: {
            abilities: [],
            category: "whisperers",
            houseColors: {
              backGroundHouse: "radial-gradient(circle, #87CEEB, #2962ff)" ,
              color1: "white",
              color2: "white",
              color3: "#8ddfff",
            },
            houseName: "Merandus",
            weaknesses: [],
            people: [
              {
                name: "Elara Merandus",
                father: "",
                mother: "",
                status: false,
                royal: true,
                gender: "f",
              },
              {
                name: "Samson Merandus",
                father: "",
                mother: "",
                status: false,
                royal: false,
                gender: "m",
              },
            ],
          }
          
    },
    RedOnes: {
        pureBlood: {
            people: [
                
            ]
        },
        newBloods: {
            electricons: {
                abilities: ["Generate Electricity", "Control of lightnings"],
                category: "electricons",
                houseColors: {
                    backGroundHouse: "radial-gradient(circle, #47004a, #000)",
                    color1: "rgb(248, 33, 255)",
                    color2: "rgb(195, 0, 255);",
                    color3: "white",
                },
                houseName: "New Blood",
                weeknesses: [
                
                ],
                people: [
                    {
                        name: "Mare Barrow",
                        father: "",
                        mother: "",
                        status: false,
                        royal: false,
                        gender: "f",
                    }
                ]
            },
            teleporters: {
                abilities: [],
                category: "teleporters",
                houseColors: {
                    backGroundHouse: "",
                    color1: "",
                    color2: "",
                    color3: "",
                },
                houseName: "New Blood",
                weeknesses: [
                
                ],
                people: [
                    {
                        name: "Shade Barrow",
                        father: "",
                        mother: "",
                        status: false,
                        royal: false,
                        gender: "m"
                    }
                ]
            }
        }
    }
}

// export default peopleOfNorta




// const peopleOfNorta = {
//     silverHouses: [
//         {
//             houseName: "Arven",
//             abilities: [
//                                 "Nullify the powers of other silvers and new bloods"
//                             ],
//             category: "Silencers",
//             houseColors: {},
//             weaknesses: [
                
//                         ],
//         },
//         {houseName: "Calore"},
//         {
//             houseName: "Samos",
//             abilities: [
//                         "Control over Metal and Magnetism",
//                         "Strong relationship with anny type of metal"
//                         ],
//             category: "Magnetrons",
//             houseColors: {
//             backGroundHouse: "black",
//             color1: "#A9A9A9",
//             color2: "#D3D3D3",
//             color3: "#C0C0C0"
//                             },
//                             houseName: "Samos",
//                             weaknesses: [
                                
//                             ],
//                             people: [
//                                 {
//                                     name: "Volo Samos",
//                                     father: "",
//                                     mother: "",
//                                     status: true,
//                                     royal: false,
//                                     gender: "m"
//                                 },
//                                 {
//                                     name: "Ptolemus Viper Samos",
//                                     father: "Volo Samos",
//                                     mother: "Larentia Viper",
//                                     status: true,
//                                     royal: false,
//                                     gender: "m"
//                                 },
//                                 {
//                                     name: "Evangeline Viper Samos",
//                                     father: "Volo Samos",
//                                     mother: "Larentia Viper",
//                                     status: true,
//                                     royal: false,
//                                     gender: "f"
//                                 }
//                             ]
//         },
//     ],
//     RedOnes: {
//         pureBlood: {
//             male: [],
//             female: []
//         },
//         newBloods: {
//             electricons: {
//                 abilities: "",
//                 cathegory: "",
//                 weaknesses: [
                
//                 ],
//                 male: [],
//                 female: []
//             },
//             teleporters: {
//                 abilities: "",
//                 cathegory: "",
//                 weaknesses: [
                
//                 ],
//                 male: [],
//                 female: []
//             }
//         }
//     }
// }

export default peopleOfNorta