import VideoPlayerSection from "./components/VideoPlayerSection";
import poster from "./assets/deixado_para_tras.png";
import banner from "./assets/banner.png";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="titles">
        <h1>DEIXADO PARA TRÁS</h1>
        <div className="hyperlinks">
          <a href="#sinopse">SINOPSE</a>
          <a href="#sobre">SOBRE O PROJETO</a>
        </div>
      </div>

      <div className="videoplayerContainer">
        <div className="videoFrame">
          <VideoPlayerSection />
        </div>
      </div>

      <div className="sinopseContainer" id="sinopse">
        <img
          className="poster"
          src={poster}
          alt="Poster"
        />

        <div className="sinopseSection">
          <h1>SINOPSE</h1>
          <p>
            Tudo começou quando as luzes da faculdade se apagaram.<br></br>
            Quando a energia desaparece Lucas só quer uma coisa: chegar em casa.
            Mas, ao longo do caminho, ele encontrará pessoas, criaturas e decisões
            que mudarão completamente sua jornada. Alguns caminhos podem levá-lo a
            perigos sem volta. Nesta experiência interativa, cada escolha importa e
            cada decisão traz consequências.
          </p>
          <p className="bold">
            Afinal, qual caminho você escolherá seguir?
          </p>
          <div className="cardsSection">
            <div className="card">
              <p>Gênero</p>
              <h2>Terror Interativo</h2>
            </div>
            <div className="card">
              <p>Duração</p>
              <h2>1min 30s</h2>
            </div>
            <div className="card">
              <p>Instituição</p>
              <h2>UFC - Campus Quixadá</h2>
            </div>
            <div className="card">
              <p>Instituição</p>
              <h2>Prototipação Rápida</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bannerSection">
        <img
          className="banner"
          src={banner}
          alt="Banner"
        />

        <div className="bannerContent">
          <h1>Seu próximo favorito está aqui</h1>

          <p>
            Novidades, lançamentos e action figures exclusivas esperando por você.
            Descubra toda a coleção que preparamos especialmente para fãs e
            colecionadores.
          </p>

          <button className="bannerButton">
            Conhecer as peças
            <span>→</span>
          </button>
        </div>
      </div>

      <div className="projectDescription" id="sobre">
        <h1 className="title">
          SOBRE O PROJETO
        </h1>
        <p>
          Este projeto foi desenvolvido como
          parte da disciplina de Prototipação
          Rápida, com o obejetivo de explorar
          as narrativas digitais na criação de
          uma animação interativa.
          <br></br>
          <br></br>
          Através da combinação de animação,
          som, programação, IA e fotografia,
          buscamos criar uma experiência
          imersiva onde cada escolha tem
          consequência. 
        </p>
      </div>

      <footer>
        <p>CRÉDITOS AOS ALUNOS DE PROTOTIPAÇÃO RÁPIDA 2026.1</p>
      </footer>
    </div>
  );
}

export default App;