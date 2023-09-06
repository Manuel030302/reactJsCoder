import { db } from "../Firebase/FirebaseConfig"
import { collection, query, getDocs, getDoc, doc, where } from "firebase/firestore";

export const getGames = async () => {
  try{
    const q = query(collection(db, "games"))
    const docs = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id:doc.id})
    });

    return docs
  }
  catch(err) {
    console.error(err)
  }
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
}

export const getGameByCategory = async(idCategory) =>{
  const q = query(collection(db, 'games'), where('categoria', '==', idCategory))
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
}
