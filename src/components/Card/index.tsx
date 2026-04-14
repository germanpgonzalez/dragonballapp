import type { CharacterType } from "../../App";

interface Props {
  item: CharacterType;
  setSelectedCharacter: (char: CharacterType) => void;
}

const index = ({ item, setSelectedCharacter } : Props) => {

  const getGlowByRace = (race: string) => {
  switch (race.toLowerCase()) {
    case "saiyan":
      return "rgba(255,200,0,0.8)"; 
    case "namekian" :
      return "rgba(0,255,120,0.7)"; 
    case "human":
      return "rgba(200,200,200,0.6)"; 
    case "frieza race":
      return "rgba(180,0,255,0.7)"; 
    default:
      return "rgba(255,255,255,0.4)";
  }
};

  return (
    <div key={item.id} className="bg-white rounded-lg shadow-md flex flex-col items-center w-80 mt-10 mb-10 h-130">
      <h2 className="text-center text-2xl text-black mb-10">{item.name}</h2>
      <div className="w-full h-72 flex items-center justify-center">
        <img src={item.image} alt={item.name}  loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-300  hover:filter-[drop-shadow(0_0_25px_var(--glow-color))]"
  style={
    { "--glow-color": getGlowByRace(item.race) } as React.CSSProperties
  }/>
      </div>
      <div className="w-full bg-gray-700 flex-1 mt-3 rounded-b-lg p-2">
        <p className="text-amber-600 text-xl font-bold">Raza: <span className="font-light text-white">{item.race}</span></p>
        <p className="text-amber-600 text-xl font-bold">Género: <span className="font-light text-white">{item.gender}</span></p>
        <p className="text-amber-600 text-xl font-bold">Base Ki: <span className="font-light text-white">{item.ki}</span></p>
        <p className="text-amber-600 text-xl font-bold">Total Ki: <span className="font-light text-white">{item.maxKi}</span></p>
        <p className="text-amber-600 text-xl font-bold">Afiliación: <span className="font-light text-white">{item.affiliation}</span></p>
        <button 
        className="mt-3 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition cursor-pointer"
        onClick={() => setSelectedCharacter(item)}
        >Ver más</button>
      </div>
    </div>
  );
};

export default index;
