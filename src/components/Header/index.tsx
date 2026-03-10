import Logo from '../../assets/img/logo.png';

const index = () => {
  return (
    <header className="bg-orange-500 flex justify-center items-center">
        <img src={Logo} alt="Logo" className='w-90 h-36'/>
    </header>
  )
}

export default index