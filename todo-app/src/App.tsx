import Header from './components/Header'
import NewToDo from './components/NewToDo'
import Todos from './components/Todos'


function App() {
  
  return (
    <div>
      <Header />
      <div>
        <NewToDo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  )
}

export default App
