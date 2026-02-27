import Navbar  from "./components/Navbar"
import Footer from "./components/Footer"
import ListCharacter from './components/ListCharacter';
import { useEffect, useState } from "react"

export interface CharacterType  {
  id: number;
  name: string;
  image: string;
};

interface ApiResponseType  {
  items: CharacterType[];
}

function App() {

  const [character, setCharacter] = useState<CharacterType[]>([]);

  useEffect(() => {
    const fetchItem = ( async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const data : ApiResponseType = await response.json();
        setCharacter(data.items);
      } catch (error) {
        console.log("Errro en el fetch");
      }
    });
    fetchItem();
  },[])



  return (
    <>
      <Navbar/>
      <h1 className="bg-red-500">Hola Manola</h1>
      <ListCharacter character={character} />
      <Footer/>
    </>
  )
}

export default App
