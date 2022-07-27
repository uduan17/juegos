import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navegar/Navbar';
import Slider from '../components/Navegar/Slider';
import Cartas from '../components/Cards/Cartas';
import Footer from '../components/piepagina/Footer';
import React from 'react'
import Texto from '../components/Texto/Parrafo';
import soulk from '../components/Img/soulk.jpg';
import Warzone from '../components/Img/Warzone.jpg';
import fifa from '../components/Img/fifa.jpg';



const Home = () => {
  return (
    <div>
        <Navbar/>

        <div className='container'>
        <Slider/>
        </div>

       <br></br>

       <div className='container'>
       <Texto/>
       </div>

       <br></br>

        <div className='content flex-wrap mb-16'>
        <Cartas
        image={soulk}
        text = "En una época de espadas y armas de fuego, unos alienígenas de alta tecnología han robado la piedra mágica que mantiene el equilibrio del mundo."
        title = "Soulk knight"
        Buttons = "Ver mas..."
        />

        <Cartas
        image={Warzone} 
        text = "Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020."
        title = "Call of duty: Warzone"
        Buttons = "Ver mas..."
        />

        <Cartas
        image={fifa}
        text = "FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Puedes tener tu propio club de futbol."
        title = "Fifa 2022"
        Buttons = "Ver mas..."
        />
        </div>

        <br></br>

        <Footer/>
       
    </div>
  )
}

export default Home