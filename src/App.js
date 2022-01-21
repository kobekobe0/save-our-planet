import './App.css'
import { Home } from './home-component/home'
import { Contribute } from './contribute-component/contribute.component'
import { Goal } from './goal-component/goal-component'
import { About } from './about-component/about-component'
import React from 'react'
import { Navbar } from './navbar-component/navbar.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbarr } from './navbar-component/navbarr'

function App() {
    return (
        <>
            <Router>
                <Navbarr />

                <div className="app-container">
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/contribute">
                            <div className="contribute">
                                <Contribute />
                            </div>
                        </Route>

                        <Route path="/goal">
                            <Goal />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App
