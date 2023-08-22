function CardsGames() {
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
              <li>
                <a href="">
                  <img src="assets/icon-game2.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="assets/icon-game1.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="assets/icon-game4.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="assets/icon-game3.svg" alt="" />
                </a>
              </li>
            </ul>
            <a href="" className="btn-all-games">
              <img src="assets/icon-group-blue.svg" alt="" />
              Ver todos os Jogos
            </a>
          </div>

        </div>
      </div>


    </section>

  );
}

export default CardsGames;