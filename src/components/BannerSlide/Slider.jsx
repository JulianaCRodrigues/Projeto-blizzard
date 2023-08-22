/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardsSlides from '../BannerSlide/CardsSlides';

import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function Slider() {

  return (
    <Swiper
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      // pagination= {true}
      slidesPerView={1}>
      <SwiperSlide>
        <section className='s-hero'>
          <div className='slide-principal'>
            <div className='swiper-wrapper'>
              <div className="swiper-slide slide-01">
                <CardsSlides
                  title='Retorna à escuridão com o game Diablo IV'
                  paragraph='O retorno de Lilith traz uma era de escuridão e sofrimento'
                  textBtn='Jogue agora'
                  imgLogo='assets/logo-diablo.png'
                  imgVideo='assets/thumbnail-diablo.png'
                  gif='assets/gifs/diablo.gif'
                />
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className='s-hero'>
          <div className='slide-principal'>
            <div className='swiper-wrapper'>
              <div className="swiper-slide slide-02">
                <CardsSlides
                  title='Novo pacote de expansão de Hearthstone'
                  paragraph='A Horda e a Aliança se encontraram no Vale Alterac para lutar'
                  textBtn=' Reserve agora na pré-venda'
                  imgLogo='assets/logo-hearthstone.png'
                  imgVideo='assets/thumbnail-heartstone.png'
                  gif='assets/gifs/heartstone.gif'
                />
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className='s-hero'>
          <div className='slide-principal'>
            <div className='swiper-wrapper'>
              <div className="swiper-slide slide-03">
                <CardsSlides
                  title='Desbrave as Terras Sombrias em Shadowlands!'
                  paragraph='O que jaz além do mundo que você conhece?'
                  textBtn=' Reserve agora na pré-venda'
                  imgLogo='assets/logo-ww.png'
                  imgVideo='assets/thumbnail-ww.png'
                  gif='assets/gifs/ww.gif'
                />
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

