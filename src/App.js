import React from 'react'

// Router imports
import { Switch, Route } from 'react-router-dom'

// custom imports
import CustomNavbar from './Components/CustomNavbar'
import Home from './routes/Home'
import Demo from './routes/Demo'
import Docs from './routes/Docs'

const App = () => {
    return (
        <div>
            <CustomNavbar />
            <Switch>
                <Route exact path="/">
                    <Demo />
                </Route>
                <Route path="/docs">
                    <Docs />
                </Route>
                <Route path="/demo">
                    <Demo />
                </Route>
            </Switch>
        </div>
    )
}

export default App
