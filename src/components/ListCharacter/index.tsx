import type { CharacterType } from "../../App";
import Card from "../Card";

interface Props {
  character: CharacterType[];
  search: string;
}

const index = ({ character, search }: Props) => {
  const filteredCharacters = character.filter((char) =>
    char.name?.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      {filteredCharacters.length <= 0 ? <p className=" col-span-full text-center text-gray-600 text-xl mt-10 mb-10"> No se encontraron personajes 🐉</p> :
        filteredCharacters.map((item) => {
          return <Card item={item} key={item.id} />;
        })
      }
    </>
  );
};

export default index;
