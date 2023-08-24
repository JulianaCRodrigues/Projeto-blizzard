
function Modal() {
  return (
    <section className="modal">
      <div className="overlay"></div>
      <div className="box">
        <button className="close">
          <img src="assets/close.svg" alt="" />
        </button>
        <img src="assets/logo-battle.svg" className="logo" alt="" />
        <form action="">
          <div className="form-group">
            <input type="text" placeholder="E-mail ou telefone" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Conectar-se</button>
          </div>
        </form>

        <div className="others-conect">
          <p>ou conecte-se com </p>
          <ul>
            <li>
              <button>
                <img src="assets/google.svg" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="assets/apple.svg" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="assets/facebook.svg" alt="" />
              </button>
            </li>
          </ul>
        </div>

        <div className="message-user">
          <p><a href=""> Crie uma conta</a>  Battle.net de graça</p>
          <a href="">Não consegue logar? </a>
        </div>
      </div>
    </section>
  );
}

export default Modal;