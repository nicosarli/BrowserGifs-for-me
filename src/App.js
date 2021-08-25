import React from "react";
import Home from './pages/Home'
import Search from './pages/Search'
import Detail from './pages/Detail'
import Header from "./components/Header";
import Register from "./pages/Register";
import Error404 from './pages/Error404'

import theme from './ThemeConfig'
import { GifsContextProvider } from './context/GifsContext'

import { ThemeProvider } from '@material-ui/core/styles'

import { Route, Switch } from 'wouter'
import Login from "./pages/Login";


function App() {  
  return (
    <ThemeProvider theme={theme}>
      <GifsContextProvider>
      <Header />
      <Switch >
        <Route path="/" component={Home} />
        <Route path="/gifs/:keyword/:rating?/:language?" component={Search} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={Error404}/>
      </Switch>
      </GifsContextProvider>
    </ThemeProvider>
  );
}

export default App;
