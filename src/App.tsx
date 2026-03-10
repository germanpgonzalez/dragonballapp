import ListCharacter from "./components/ListCharacter";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import { Layout } from "./layout";

export interface CharacterType {
  id: number;
  name: string;
  image: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string;
}

interface ApiResponseType {
  items: CharacterType[];
  meta: {
    totalPages: number;
  };
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<CharacterType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    console.log("Página actual:", page);
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters?page=${page}&limit=12`
        );
        const data: ApiResponseType = await response.json();
        setCharacter(data.items);
        setTotalPages(data.meta.totalPages);
        setLoading(false);
      } catch (error) {
        console.log("Error en el fetch");
      }
    };
    fetchItem();
  },[page]);

  return (
    <>
      <Layout>
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 max-w-6xl mx-auto mt-28">
            <ListCharacter character={character} />
          </div>
        )}
        <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
      </Layout>
    </>
  );
}

export default App;
