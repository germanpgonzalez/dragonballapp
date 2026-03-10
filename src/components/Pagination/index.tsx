interface PaginationProps {
  page: number;
  totalPages:  number;
  setPage: (page: number) => void;
} 

const index = ({page, setPage, totalPages}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-10 mb-10">
        <button 
            className="bg-orange-500 text-white py-2 px-4 rounded cursor-pointer disabled:opacity-50" 
            onClick={()=> setPage(page-1)}
            disabled={page === 1}
            >Anterior
        </button>
        {
            Array.from({length: totalPages}, (_,index) => (
                <button
                    key={index} 
                    onClick={() => (setPage(index+1))}
                    className={`py-2 px-4 rounded cursor-pointer ${page === index+1 ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'}`}
                    >
                    {index+1}
                </button>
            ))
        }
        <button 
        className="bg-orange-500 text-white py-2 px-4 rounded cursor-pointer disabled:opacity-50" 
        onClick={() => setPage(page+1)}
        disabled={page === totalPages}
        >Siguiente
        </button>
    </div>
  )
}

export default index