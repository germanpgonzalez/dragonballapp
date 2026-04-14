import type { CharacterType } from "../../App";

interface Props {
  character: CharacterType;
  onClose: () => void;
}

const index = ({character, onClose} : Props) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
          ✖
        </button>

        <img 
          src={character.image} 
          className="w-full h-64 object-contain mb-4"
        />

        <h2 className="text-2xl font-bold text-center mb-2">
          {character.name}
        </h2>

        <p className="text-sm text-gray-700">
          {character.description}
        </p>
        <button 
        className="mt-3 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition cursor-pointer block mx-auto"
        onClick={onClose}
        >Cerrar</button>
      </div>
    </div>
  )
}

export default index;