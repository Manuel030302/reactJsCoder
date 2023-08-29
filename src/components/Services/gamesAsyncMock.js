import { db } from "../../Firebase/FirebaseConfig"
import { collection, query, getDocs, getDoc, doc, where } from "firebase/firestore";
/* import { db } from "../../Firebase/FirebaseConfig"
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

export const getGames = async () => {
    const q = query(collection(db, "games"))
    const docs = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id:doc.id})
    });
    return docs
    /* new Promise((resolve, reject) => {
        if(games.length === 0) {
            reject(new Error(`No existen datos`));
        }
        setTimeout(() => {
            resolve(games);
        }, 2000);
    }); 
    */
} 

export const getGameById = async (gameId) => {
    try{
        const q = doc(db, "games", gameId)
        let game = {}
        const querySnapshot = await getDoc(q)
        if(querySnapshot.exists()){
            game = ({...querySnapshot.data(), id: querySnapshot.id})
        }
        return game
    }
    catch(err) {
        console.error(err)
    }
    
    /* new Promise(( resolve, reject ) => {
        if(games.length === 0) {
            reject(new Error(`No existen datos`));
        }
        setTimeout(() =>{
            const game = games.find(game => game.id == gameId);
            resolve(game);
            console.log(game)
        }, 2000) 
    })*/
}

export const getGameByCategory = async(idCategory) =>{
    const q = query(collection(db, 'libros'), where('categoria', '==', idCategory))
    try{
        const querySnapshot = await getDocs(q)
        const charData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        return charData
    }
    catch(err) {
        console.error(err)
    }
    
   /*  return new Promise (( resolve, reject ) => {
        if(games.length === 0) {
            reject(new Error(`No existen datos`));
        }
        setTimeout(() =>{
            const gameCategory = games.filter(game => game.category == idCategory)
            resolve(gameCategory);
        }, 2000)
    }) */
}
