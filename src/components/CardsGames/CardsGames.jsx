import { useState, useEffect } from 'react';
import ButtonComponents from './ButtonsComponents';
import cardList from './Card';
import CardComponent from './CardComponent';

function CardsGames() {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setFilteredCards(cardList);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredCards(cardList);
    },300);

  return () => clearTimeout(timer);
  },[activeTab]);

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
          <div className="tab-pane-games active">
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
