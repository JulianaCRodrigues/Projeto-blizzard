function Header() {
  return (
    <header>
      <div className="container">
        <div className="left-container">
          <a href="" className="logo">
            <img src="assets/logo.svg" alt="Logo com o nome da Blizzard" title="Logo da Blizzard" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="">
                  Jogos
                  <img src="assets/arrow-down.svg" alt="Icone de seta" title="Icone de seta" />
                </a>
              </li>
              <li>
                <a href="">
                  Esportes
                  <img src="assets/arrow-down.svg" alt="Icone de seta" title="Icone de seta" />
                </a>
              </li>
              <li>
                <a href="">
                  Loja
                </a>
              </li>
              <li>
                <a href="">
                  Notícias
                </a>
              </li>
              <li>
                <a href="">
                  Suporte
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-container">
          <a href="" className="btn btn-outline">Criar Conta</a>
          <a href="" className="btn btn-primary">
            <img src="assets/icon-login.svg" alt="Icone login" title="Icone login" />
            Logar</a>
        </div>
      </div>
    </header>
  );
}

export default Header;