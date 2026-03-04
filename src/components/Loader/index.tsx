import esfera from '../../assets/img/esfera.png';

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center h-40  min-h-screen">
        <img src={esfera}
        alt="Loading..." 
        className="animate-spin h-32 w-32"/>
        <p className="ml-4 text-2xl">Cargando....</p>
    </div>
  )
}

export default index