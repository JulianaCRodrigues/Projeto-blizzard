/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import ButtonComponents from './ButtonsComponents';
// import cardList from './Card'

// import CardComponent from "./CardComponent";

// function CardsGames() {
//   const [activeTab, setActiveTab] = useState('tab-pane-games');

//   const handleChanceTab = (tabName, event) => {
//     event.preventDefault();
//     setActiveTab(tabName);
//   }


//   function renderTabContent() {
//     switch (activeTab) {
//       case 'Tab 1':
//         return <CardComponent />
//       case 'Tab 2':
//         return <CardComponent />

//       case 'Tab 3':
//         return <CardComponent />

//       case 'Tab 4':
//         return <CardComponent />
//     }
//   }

//   return (

//     <section className="s-games">
//       <div className="container">
//         <div className="top">
//           <div className="left-top">
//             <span>GAMES</span>
//             <h2>Jogos exclusivos</h2>
//           </div>
//           <div className="right-top">
//             <ul className="js-nav-games">
//             <ButtonComponents
//                 tabName="Tab 1"
//                 activeTab={activeTab}
//                 fn={handleChanceTab}
//                 image="assets/icon-game1.svg" 
//               />
//               <ButtonComponents
//                 tabName="Tab 2"
//                 activeTab={activeTab}
//                 fn={handleChanceTab}
//                 image="assets/icon-game2.svg" 
//               />
//               <ButtonComponents
//                 tabName="Tab 3"
//                 activeTab={activeTab}
//                 fn={handleChanceTab}
//                 image="assets/icon-game3.svg" 
//               />
//               <ButtonComponents
//                 tabName="Tab 4"
//                 activeTab={activeTab}
//                 fn={handleChanceTab}
//                 image="assets/icon-game4.svg" 
//               />
//             </ul>

//             {/* <ul className="js-nav-games">
//               <li>
//                 <a href="">
//                   <img src="assets/icon-game2.svg" alt="" />
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <img src="assets/icon-game1.svg" alt="" />
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <img src="assets/icon-game4.svg" alt="" />
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <img src="assets/icon-game3.svg" alt="" />
//                 </a>
//               </li>
//             </ul> */}


//             <a href="" className="btn-all-games">
//               <img src="assets/icon-group-blue.svg" alt="" />
//               Ver todos os Jogos
//             </a>
//           </div>
//         </div>
//         <div className="tab-games-content">
//       {renderTabContent()  }  
//           <div className="tab-pane-games">
//             {
//               cardList && (
//                 cardList.map((card) => {
//                   return (
//                     <CardComponent
//                       key={card.title}
//                       image={card.image}
//                       title={card.title}
//                       description={card.description}
//                     />
//                   )
//                 })
//               )
//             }
//             <a href="" className='card-all-games'>
//               <img src="assets/logo.svg" alt="" />
//               <span>
//                 <img src="assets/icon-group-white.svg" alt="" />
//                 Ver todos jogos
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CardsGames;

import { useState, useEffect } from 'react';
import ButtonComponents from './ButtonsComponents';
import cardList from './Card';
import CardComponent from './CardComponent';

function CardsGames() {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // Inicialmente, carregue todos os cartões
    setFilteredCards(cardList);
  }, []);

  useEffect(() => {
 
    switch (activeTab) {
      case 'Tab 1':
        setFilteredCards(cardList);
        break;
      case 'Tab 2':
        setFilteredCards(cardList);
        break;
      case 'Tab 3':
        setFilteredCards(cardList);
        break;
      case 'Tab 4':
        setFilteredCards(cardList);
        break;
      default:
        break;
    }
  }, [activeTab]);

  const handleChanceTab = (tabName) => {
    setActiveTab(tabName);
  }
  

  return (
    <section className="s-games">
      <div className="container">
        <div className="top">
          <div className="left-top">
            <span>GAMES</span>
            <h2>Jogos exclusivos</h2>
          </div>
          <div className="right-top">
            <ul className="js-nav-games">
              <ButtonComponents
                tabName="Tab 1"
                activeTab={activeTab}
                fn={handleChanceTab}
                image="assets/icon-game1.svg"
              />
              <ButtonComponents
                tabName="Tab 2"
                activeTab={activeTab}
                fn={handleChanceTab}
                image="assets/icon-game2.svg"
              />
              <ButtonComponents
                tabName="Tab 3"
                activeTab={activeTab}
                fn={handleChanceTab}
                image="assets/icon-game4.svg"
              />
              <ButtonComponents
                tabName="Tab 4"
                activeTab={activeTab}
                fn={handleChanceTab}
                image="assets/icon-game3.svg"
              />
            </ul>

            <a href="" className="btn-all-games">
              <img src="assets/icon-group-blue.svg" alt="" />
              Ver todos os Jogos
            </a>
          </div>
        </div>
        <div className="tab-games-content">
          <div className="tab-pane-games">
            {filteredCards.map((card) => (
              <CardComponent
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
    
            <a href="" className='card-all-games'>
              <img src="assets/logo.svg" alt="" />
              <span>
                <img src="assets/icon-group-white.svg" alt="" />
                Ver todos jogos
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsGames;

