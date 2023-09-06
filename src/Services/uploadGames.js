/* import { db } from "../Firebase/FirebaseConfig"
import { collection, addDoc } from "firebase/firestore";

const games = [
    {
      nombre: "The Witcher 3: Wild Hunt",
      precio: 39.99,
      descuento: 0.2,
      rate: 9.8,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
      categoria: "rpg"
    },
    {
      nombre: "Hades",
      precio: 24.99,
      descuento: 0.1,
      rate: 9.7,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
      categoria: "action"
    },
    {
      nombre: "Portal 2",
      precio: 9.99,
      descuento: 0.5,
      rate: 9.6,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg",
      categoria: "fps"
    },
    {
      nombre: "Divinity: Original Sin II - Definitive Edition",
      precio: 44.99,
      descuento: 0.3,
      rate: 9.5,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg",
      categoria: "rpg"
    },
    {
      nombre: "Hollow Knight",
      precio: 14.99,
      descuento: 0.4,
      rate: 9.4,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
      categoria: "platforms"
    },
    {
      nombre: "DOOM Eternal",
      precio: 59.99,
      descuento: 0.2,
      rate: 9.3,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg",
      categoria: "fps"
    },
    {
      nombre: "Sekiro™ Shadows Die Twice - GOTY Edition",
      precio: 59.99,
      descuento: null,
      rate: 9.2,
      urlImagen:
        "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg",
      categoria: "action"
    },
    {
      nombre:
        "The Elder Scrolls V Skyrim Special Edition",
        precio:
        39.99,
        descuento:
        null,
        rate:
        9.1,
        urlImagen:
        "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg",
        categoria:
        "rpg"
     },
     {
       nombre:
         "Red Dead Redemption II",
         precio:
         59.99,
         descuento:
         null,
         rate:
         9.0,
         urlImagen:
         "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
         categoria:
         "adventure"
     },
     {
       nombre:
         "Half-Life Alyx",
         precio:
         59.99,
         descuento:
         null,
         rate:
         8.9,
         urlImagen:
         "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg",
         categoria:
         "fps"
     },
     {
       nombre:
         "Control Ultimate Edition",
         precio:
         39.99,
         descuento:
         null,
         rate:
         8.8,
         urlImagen:
         "https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg",
         categoria:
         "action"
     },
     {
       nombre:
         "Resident Evil Village / Biohazard Village",
         precio:
         59.99,
         descuento:
         null,
         rate:
         8.7,
         urlImagen:
          'https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg',
          categoria:'adventure'
     },
     {
       nombre:'Death Stranding',
       precio:'59,99',
       descuento:null, 
       rate:'8,6',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/1190460/header.jpg',
       categoria:'adventure'
     },
     {
       nombre:'Cyberpunk2077',
       precio:'59,99',
       descuento:null, 
       rate:'8,5',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
       categoria:'rpg'
     },
     {
       nombre:'Dark Souls III',
       precio:'59,99',
       descuento:null, 
       rate:'8,4',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg',
       categoria:'action'
     },
     {
       nombre:'Fallout 4',
       precio:'29,99',
       descuento:null, 
       rate:'8,3',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg',
       categoria:'rpg'
     },
     {
       nombre:'The Binding of Isaac: Rebirth',
       precio:'14,99',
       descuento:null, 
       rate:'8,2',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg',
       categoria:'action'
     },
     {
       nombre:'Undertale',
       precio:'9,99',
       descuento:null, 
       rate:'8,1',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg',
       categoria:'rpg'
     },
     {
       nombre:'Terraria',
       precio:'9,99',
       descuento:null, 
       rate:'8,0',
       urlImagen:'https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg',
       categoria:'adventure'
     },
     {
      nombre: "Subnautica",
      precio: 24.99,
      descuento: null,
      rate: 7.9,
      urlImagen: "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
      categoria: "adventure"
    }
  ];
  


async function subirJuegos(games) {
  const juegosRef = collection(db, "games");
  for (const game of games) {
    await addDoc(juegosRef, game);
  }
}

subirJuegos(games);
 */