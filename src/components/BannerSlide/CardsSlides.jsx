/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function CardsSlides(props) {
  return (
    // <section className="s-hero">
    //   <div className="slide-principal">
    //     <div className="swiper-wrapper">
    //       <div className="swiper-slide slide-01"
    //          style={{
    //           backgroundImage: "url('assets/banner-slide-01.jpg')",
       
    //       }}>
            <div className="container">
              <div className="left-content">
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>
                <button href="" className="btn btn-primary">
                  <img src="assets/icon-login.svg" alt="" />
                  {props.textBtn}
                </button>
              </div>
              <div className="right-content">
                <div className="logo">
                  <img src={props.imgLogo} alt="" />
                </div>
                <div className="video">
                  <span>Assista o trailer</span>
                  <button className="btn-video">
                    <img src={props.imgVideo} className="thumb default" alt="" />
                    <img src={props.gif} className="thumb hover" alt="" />
                    <div className="icon">
                      <img src="assets/icon-play.svg" alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
    //       </div>
    //       {/* <div className="swiper-slide slide-02"
    //       style={{
    //         backgroundImage: "url('assets/banner-slide-02.jpg')",
   
    //     }}>
    //         <div className="container">
    //           <div className="left-content">
    //             <h2>{props.title}</h2>
    //             <p>{props.paragraph}</p>
    //             <button href="" className="btn btn-primary">
    //               <img src="assets/icon-login.svg" alt="" />
    //               {props.textBtn}
    //             </button>
    //           </div>
    //           <div className="right-content">
    //             <di className="logo">
    //               <img src={props.imgLogo} alt="" />
    //             </di>
    //             <div className="video">
    //               <span>Assista o trailer</span>
    //               <button className="btn-video">
    //                 <img src={props.imgVideo} className="thumb default" alt="" />
    //                 <img src={props.gif} className="thumb hover" alt="" />
    //                 <div className="icon">
    //                   <img src="assets/icon-play.svg" alt="" />
    //                 </div>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </section>
  );

}

export default CardsSlides;