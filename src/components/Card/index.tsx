import type { CharacterType } from "../../App";

interface Props {
  item: CharacterType;
}

const index = ({ item } : Props) => {
  return (
    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-80 mt-10 mb-10">
      <h2 className="text-center text-2xl text-black mb-10">{item.name}</h2>
      <div className="w-full h-72 flex items-center justify-center">
        <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
      </div>
    </div>
  );
};

export default index;
