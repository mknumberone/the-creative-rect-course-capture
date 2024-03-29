import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUS from './pages/AboutUS';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Nav';
//Router
import { Route, Switch, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';
import SrollTop from "./components/ScrollTop"
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <SrollTop></SrollTop>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUS />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
