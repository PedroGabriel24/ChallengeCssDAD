import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      <div className='app'>
        <h1>React com css</h1>

        <MyComponent/>
        <p>Este parágrafo pegou o estilo do componente!</p>
      </div>
    </>
  )
}

export default App
