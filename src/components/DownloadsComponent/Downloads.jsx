
function Donwloads() {
  return (
    <section className="s-download">
      <div className="container">
        <div className="text-left">
          <img src="assets/logo-battle.svg" className="logo" alt="" />
          <h2>Baixe agora o battle.net</h2>
          <ul>
            <li>
              <di className="icon">
                <img src="assets/icon-jogos.svg" alt="" />
              </di>
              <p>Seus jogos em um só lugar</p>
            </li>
            <li>
              <di className="icon">
                <img src="assets/icon-conect.svg" alt="" />
              </di>
              <p>Conecte-se aos seus amigos</p>
            </li>
            <li>
              <di className="icon">
                <img src="assets/icon-buy.svg" alt="" />
              </di>
              <p>Compre jogos e itens digitais</p>
            </li>
          </ul>
          <a href="" className="btn btn-primary">
            <div className="icon">
              <img src="assets/icon-apple.svg" alt="" />

            </div>
            Baixar para o MacOS
          </a>
          <div className="app">
            <img src="assets/icon-phone.svg" alt="" />
            <p>Também disponível como
              <a href=""> aplicativo móvel </a>
            </p>
          </div>
        </div>
<div className="image">
  <img src="assets/image-download-lg.png" className="img-lg" alt="" />
  <img src="assets/image-download-sm.png" className="img-sm" alt="" />
</div>

      </div>

    </section>
  );
}

export default Donwloads;