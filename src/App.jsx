
import '../css/main.min.css'
// import './scss/main.scss'

import Header from './components/Header/Header'
import Slider from './components/BannerSlide/Slider'
import CardsGames from './components/CardsGames/CardsGames'
import Downloads from './components/DownloadsComponent/Downloads'

// import BannerSlide from './components/BannerSlide'

function App() {

  return (
    <>
      <Header />
      <Slider/>
      {/* <BannerSlide /> */}
      <CardsGames />
      < Downloads />
      
  
    </>
  )
}


export default App
