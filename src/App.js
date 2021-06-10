import logo from './logo.svg'
import React from 'react'
import './App.css'
import Menu from './Components/Menu'
import Header from './Components/Header'
import Router from './router'
import Login from './Pages/Login'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <Route
                render={({ location }) => {
                    if (!localStorage.getItem('currentUser') && location.pathname !== '/login') {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location },
                                }}
                            ></Redirect>
                        )
                    } else {
                        return (
                                <Switch>
                                    <Route path="/login" component={Login}></Route>
                                    <div>
                                        <Header></Header>
                                        <div className="App">
                                            <Menu></Menu>
                                            <Router></Router>
                                        </div>
                                    </div>
                                </Switch>
                        )
                    }
                }}
            ></Route>
        </HashRouter>
    )
}

export default App
