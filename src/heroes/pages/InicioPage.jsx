import { useNavigate } from 'react-router-dom'
import dclogo from '../../assets/DC-logo.jpg'
import marvellogo from '../../assets/marvel-comics.jpeg'

export  const InicioPage = () => {

  const navigate = useNavigate()
  const onMarvel = () => {
    navigate("/marvel")
  }
  const onDc = () => {
    navigate("/dc")
  }

  return (
    <>
    <h1 className="text-center font-bold text-6xl uppercase mt-12 animate__animated animate__backInDown">
      ¿De qué <span className="text-yellow-500"> multiverso</span> eres?
    </h1>
    <div className="flex flex-col justify-center items-center mt-20">
      <img onClick={onMarvel} src={marvellogo} className="w-72 rounded-lg cursor-pointer m-4 animate__animated animate__bounceInLeft hover:w-80 duration-75" />
      <img onClick={onDc} src={dclogo} className="w-72 rounded-lg cursor-pointer m-4 animate__animated animate__bounceInRight hover:w-80 duration-75" />
    </div>
    <div className="my-10 flex flex-col justify-center items-center">
      <div>
      Exercise by <a href="https://topette.github.io" className='hover:text-yellow-500 duration-75'>@topette</a> for <a href="https://colombia.marialuisa.foundation/" className='hover:text-yellow-500 duration-75'>@FIMLM</a> Frontend
      </div> 
    </div>
    </>
  )
}
