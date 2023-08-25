
function MenuEsportes() {
  return ( 
    <div className="menu menuEsportes">
      <div className="area-menu">
        <div className="container">
          <ul>
            <li>
              <a href="">
                <div className="icon">
                  <img src="assets/logo-heathstone-masters.png" alt="" />
                </div>
                <span>Hearthstone® <br/> masters</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="icon">
                  <img src="assets/logo-arena-ww.png" alt="" />
                </div>
                <span>Campeonato Mundial de<br/> Arena WoW®</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="icon">
                  <img src="assets/logo-starfield-wc.png" alt="" />
                </div>
                <span>StarCraft® II <br/> WCS</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="icon">
                  <img src="assets/logo-overwatch-league.png" alt="" />
                </div>
                <span>Copa Mundial <br/> de Overwatch®</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="icon">
                  <img src="assets/logo-overwatch-league-02.png" alt="" />
                </div>
                <span>Liga de Overwatch®</span>
              </a>
            </li>
          
          </ul>
        </div>
      </div>
      <div className="footer-menu">
        <ul>
         <li>
          <a href="">
            <div className="icon">
              <img src="assets/icon-torneio.svg" alt="" />
            </div>
            <span>Torneios da comunidade</span>
          </a>
         </li>
       
        </ul>
      </div>
    </div>
   );
}

export default MenuEsportes;