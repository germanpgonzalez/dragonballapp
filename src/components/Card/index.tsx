import type { CharacterType } from "../../App";

interface Props {
  item: CharacterType;
}

const index = ({ item } : Props) => {
  return (
    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <h3 className="text-center border-l-black">{item.name}</h3>
      <img src={item.image} alt={item.name} width={150} />
    </div>
  );
};

export default index;
