import logo from './logo.svg'
import './App.css'
import Menu from './Components/Menu'
import Header from './Components/Header'
import Router from './router'

function App() {
    return (
        <div>
            <Header></Header>
            <div className="App">
                <Menu></Menu>
                <Router></Router>
            </div>
        </div>
    )
}

export default App
