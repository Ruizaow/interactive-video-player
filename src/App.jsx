import VideoPlayerSection from "./components/VideoPlayerSection";
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
        <VideoPlayerSection/>
      </div>

      <div className="sinopseContainer" id="sinopse">
        <div className="poster"></div>

        <div className="sinopseSection">
          <h1>SINOPSE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id
            est laborum.
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