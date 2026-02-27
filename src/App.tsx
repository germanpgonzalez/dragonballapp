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
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mt-10 mb-10 px-10">
        <ListCharacter character={character} />
      </main>
      <Footer/>
    </>
  )
}

export default App
