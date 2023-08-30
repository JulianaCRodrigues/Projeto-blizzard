/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SlidePrincipal from './SlidePrincipal';

import { Swiper, SwiperSlide } from 'swiper/react';


function Slider() {

  return (

    <Swiper
      slidesPerView={1}>

      <SwiperSlide>
        <section className='s-hero'>
          <div className="slide-thumbnail">
            <Swiper
              slidesPerView={5}
              direction='vertical'
            >
              
              <SwiperSlide>
                <div className='swiper-wrapper'>
                  <div className="swiper-slide">
                  
                    <img src="assets/logo-xs-diablo.png" alt="" />
                 
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-wrapper'>
                  <div className="swiper-slide">
                    <img src="assets/logo-xs-heartstone.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-wrapper'>
                  <div className="swiper-slide">
                    <img src="assets/logo-xs-ww.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-wrapper'>
                  <div className="swiper-slide">
                    <img src="assets/logo-xs-diablo-imortal.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-wrapper'>
                  <div className="swiper-slide">
                    <img src="assets/logo-xs-starfield.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>

          <div className='slide-principal'>
            <div className='swiper-wrapper'>
              <div className="swiper-slide slide-01">
                <SlidePrincipal
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
                <SlidePrincipal
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
                <SlidePrincipal
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

