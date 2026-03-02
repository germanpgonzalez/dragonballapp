import type { CharacterType } from "../../App";

interface Props {
  item: CharacterType;
}

const index = ({ item } : Props) => {
  return (
    <div key={item.id} className="bg-white rounded-lg shadow-md flex flex-col items-center w-80 mt-10 mb-10 h-130">
      <h2 className="text-center text-2xl text-black mb-10">{item.name}</h2>
      <div className="w-full h-72 flex items-center justify-center">
        <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="w-full bg-gray-700 flex-1 mt-3 rounded-b-lg p-2">
        <p className="text-amber-600 text-xl font-bold">Raza: <span className="font-light text-white">{item.race}</span></p>
        <p className="text-amber-600 text-xl font-bold">Género: <span className="font-light text-white">{item.gender}</span></p>
        <p className="text-amber-600 text-xl font-bold">Base Ki: <span className="font-light text-white">{item.ki}</span></p>
        <p className="text-amber-600 text-xl font-bold">Total Ki: <span className="font-light text-white">{item.maxKi}</span></p>
        <p className="text-amber-600 text-xl font-bold">Afiliación: <span className="font-light text-white">{item.affiliation}</span></p>
      </div>
    </div>
  );
};

export default index;
