import './App.css'
import CarsComponent from './components/Cars/CarsComponent';
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <>
      <div className='app'>
        <Title />
  
        <CarsComponent style={{ margin_: "red" }}/>
        <h1>React com css</h1>

        <MyComponent/>
        <p>Este parágrafo pegou o estilo do componente!</p>

        <p
            style={{
                color: "blue",
                padding: "25px",
                borderTop: "1px dotted blue",
              }}
            >
              Este elemento foi estilizado inline
          </p>

          <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
            CSS dinâmico
          </h2>
          <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
            CSS dinâmico 2
          </h2>

          <h2 className={redTitle ? "red-title" : "title"}>
            Este título vai ter uma classe dinâmica
          </h2>

          <Title />
          <h1 className="title">Este não recebe título do CSS modules</h1>
      </div>
    </>
  )
}

export default App
