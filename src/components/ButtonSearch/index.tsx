interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}


const index = ({setSearch} : Props) => {
  return (
    <div className="flex justify-center mt-10">
        <div className="relative">
            <input 
            type="text" 
            placeholder="Buscar personaje..."
            className="bg-gray-100 text-gray-800 px-4 py-2 pr-10 rounded-full border border-gray-300
                 w-64 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:w-80"
            onChange={(e) => setSearch(e.target.value)}
            /> 
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔎</span>
        </div>
    </div>
  )
}

export default index