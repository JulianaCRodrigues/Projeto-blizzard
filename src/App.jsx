
import '../css/main.min.css'
// import './scss/main.scss'

import Header from './components/Header/Header'
import Slider from './components/BannerSlide/Slider'
import CardsGames from './components/CardsGames/CardsGames'
import Downloads from './components/DownloadsComponent/Downloads'
import MenuJogos from './components/Menus/MenuJogos'

// import BannerSlide from './components/BannerSlide'

function App() {

  return (
    <>
      <Header />
      <Slider/>
      {/* <BannerSlide /> */}
      <CardsGames />
      < Downloads />
      <MenuJogos />
      
    </>
  )
}


export default App
