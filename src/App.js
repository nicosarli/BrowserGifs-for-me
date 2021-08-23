import React from "react";
import Home from './pages/Home'
import Search from './pages/Search'
import Detail from './pages/Detail'
import Error404 from './pages/Error404'
import Header from "./components/Header";
import theme from './ThemeConfig'
import { GifsContextProvider } from './context/GifsContext'

import { ThemeProvider } from '@material-ui/core/styles'

import { Route, Switch } from 'wouter'


function App() {  
  return (
    <ThemeProvider theme={theme}>
      <GifsContextProvider>
      <Header />
      <Switch >
        <Route path="/" component={Home} />
        <Route path="/gifs/:keyword/:rating?/:language?" component={Search} />
        <Route path="/detail/:id" component={Detail} />
        <Route component={Error404}/>
      </Switch>
      </GifsContextProvider>
    </ThemeProvider>
  );
}

export default App;
