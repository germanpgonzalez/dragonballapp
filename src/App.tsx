import Header from "./components/Header";
import Footer from "./components/Footer";
import ListCharacter from './components/ListCharacter';
import Loader from "./components/Loader";
import { useEffect, useState } from "react"

export interface CharacterType {
  id: number;
  name: string;
  image: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string
};

interface ApiResponseType {
  items: CharacterType[];
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<CharacterType[]>([]);

  useEffect(() => {
    const fetchItem = (async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const data: ApiResponseType = await response.json();
        setCharacter(data.items);
        setLoading(false);
      } catch (error) {
        console.log("Errro en el fetch");
      }
    });
    fetchItem();
  }, [])



  return (
    <>
      <Header />
      <main className="mt-10 mb-10">
      {loading ? 
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>  : 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        <ListCharacter character={character} /> 
      </div>}
      </main>
      <Footer />
    </>
  )
}

export default App
