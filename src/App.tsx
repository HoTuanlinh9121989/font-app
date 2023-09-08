import './App.css'
import { FilterContextProvider } from './context/filterContext'
import Home from './page/Homepage'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <FilterContextProvider>
          <Home />
        </FilterContextProvider>
      </div>
    </Router>
  )
}

export default App
