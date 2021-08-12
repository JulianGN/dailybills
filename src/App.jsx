import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import DashboardPage from './pages/Dashboard'

import LoginPage from './pages/Login'

export const FullWidth = styled.div`
  display: grid;
  grid-template:
      "side header" 102px
      "side full"
      / 102px 1fr
  }
`

export const Container = styled.section`
  max-width: 1200px;  
  margin: auto;
`

function App() {
  return (
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={LoginPage} />
            { localStorage.getItem("token") &&
              <Route exact path={"/dashboard"} component={DashboardPage} />
            }
          </Switch>
        </BrowserRouter>
  )
}

export default App
