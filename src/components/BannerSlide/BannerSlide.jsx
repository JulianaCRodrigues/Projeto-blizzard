// import { Swiper, SwiperSlide } from 'swiper/react';
// import CardsSlides from './Card/CardsSlides';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// // import './styles.css';

// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { useState } from 'react';

// function BannerSlide() {

//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <>
  
//   <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={20}
//         slidesPerView={5}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs, {
//           thumbs: {
//             onSwiper: setThumbsSwiper,
//           },
//         }]}
//         className="slide-thumbnail"
//         direction='vertical'
//       >
//         <div className="slide-thumbnail">
//           <div className="swiper-wrapper">
//             <SwiperSlide>
//               <div className="swiper-slide">
//                 <img src="/assets/logo-xs-diablo" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="swiper-slide">
//                 <img src="/assets/logo-xs-hearstone" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="swiper-slide">
//                 <img src="/assets/logo-xs-ww" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="swiper-slide">
//                 <img src="/assets/logo-xs-ww" alt="" />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="swiper-slide">
//                 <img src="/assets/logo-xs-ww" alt="" />
//               </div>
//             </SwiperSlide>
//           </div>
//         </div>


//       </Swiper>

//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         slidesPerView={1}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2 slide-principal'"
//       >
//         <SwiperSlide>
//           <section className='s-hero'>

//             <div className='slide-principal'>
//               <div className='swiper-wrapper'>
//                 <div className="swiper-slide slide-01">
//                   <CardsSlides
//                     title='Retorna à escuridão com o game Diablo IV'
//                     paragraph='O retorno de Lilith traz uma era de escuridão e sofrimento'
//                     textBtn='Jogue agora'
//                     imgLogo='assets/logo-diablo.png'
//                     imgVideo='assets/thumbnail-diablo.png'
//                     gif='assets/gifs/diablo.gif'
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </SwiperSlide>

//         <SwiperSlide>
//           <section className='s-hero'>
//             <div className='slide-principal'>
//               <div className='swiper-wrapper'>
//                 <div className="swiper-slide slide-02">
//                   <CardsSlides
//                     title='Novo pacote de expansão de Hearthstone'
//                     paragraph='A Horda e a Aliança se encontraram no Vale Alterac para lutar'
//                     textBtn=' Reserve agora na pré-venda'
//                     imgLogo='assets/logo-hearthstone.png'
//                     imgVideo='assets/thumbnail-heartstone.png'
//                     gif='assets/gifs/heartstone.gif'
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </SwiperSlide>

//         <SwiperSlide>
//           <section className='s-hero'>
//             <div className='slide-principal'>
//               <div className='swiper-wrapper'>
//                 <div className="swiper-slide slide-03">
//                   <CardsSlides
//                     title='Desbrave as Terras Sombrias em Shadowlands!'
//                     paragraph='O que jaz além do mundo que você conhece?'
//                     textBtn=' Reserve agora na pré-venda'
//                     imgLogo='assets/logo-ww.png'
//                     imgVideo='assets/thumbnail-ww.png'
//                     gif='assets/gifs/ww.gif'
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default BannerSlide;

import { Swiper, SwiperSlide } from 'swiper/react';
import CardsSlides from '../CardSlide/CardsSlides';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

function BannerSlide() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
  

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 slide-principal'"
      >
        <SwiperSlide>
          <section className='s-hero'>

    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, {
          thumbs: {
            onSwiper: setThumbsSwiper,
          },
        }]}
        className="slide-thumbnail"
        direction='vertical'
      >
        <div className="slide-thumbnail">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/assets/logo-xs-diablo" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/assets/logo-xs-hearstone" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/assets/logo-xs-ww" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/assets/logo-xs-ww" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="/assets/logo-xs-ww" alt="" />
              </div>
            </SwiperSlide>
          </div>
        </div>


      </Swiper>

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
    </>
  );
}

export default BannerSlide;