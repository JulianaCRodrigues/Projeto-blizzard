import { useState } from "react";
import Modal from '../Modal/Modal'
import MenuJogos from '../Menus/MenuJogos'
import MenuEsportes from "../Menus/MenuEsportes";



function Header() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [menuAbertoJogos, setMenuAbertoJogos] = useState(false);
  const [menuAbertoEsportes, setMenuAbertoEsportes] = useState(false);

  const alterarMenuJogos = () => {
    setMenuAbertoJogos(!menuAbertoJogos);
  }

  const alterarMenuEsportes = () => {
    setMenuAbertoEsportes(!menuAbertoEsportes)
  }


  return (
    <header className={menuAbertoJogos || menuAbertoEsportes ? "menu-aberto" : ""}>
      <div className="container">
        <div className="left-container">
          <a href="" className="logo">
            <img src="assets/logo.svg" alt="Logo com o nome da Blizzard" title="Logo da Blizzard" />
          </a>
          <nav>
            <ul>
              <li>
                <button onClick={alterarMenuJogos}>
                  Jogos
                  {menuAbertoJogos && <MenuJogos />}
                  <img src="assets/arrow-down.svg" alt="Icone de seta" title="Icone de seta" />
                </button>
              </li>

              <li>
                <button onClick={alterarMenuEsportes}>
                  Esportes
                  {menuAbertoEsportes && <MenuEsportes />}
                  <img src="assets/arrow-down.svg" alt="Icone de seta" title="Icone de seta" />
                </button>
              </li>

              <li>
                <button>
                  Loja
                </button>
              </li>

              <li>
                <button>
                  Notícias
                </button>
              </li>

              <li>
                <button>
                  Suporte
                </button>
              </li>
            </ul>

          </nav>
        </div>
        <div className="right-container">
          <button className="btn btn-outline">Criar Conta</button>
          <button className="btn btn-primary" onClick={() => setIsModalVisible(true)}>
            <img src="assets/icon-login.svg" alt="Icone login" title="Icone login" />
            Logar
          </button> {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}/> : null}
          <button className="btn-mobile">
            <img src="assets/icon-mobile.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;