import React, { Component } from 'react';
import AboutUS from './pages/AboutUS';
import Nav from './components/Nav'
//Global style
import GlobalStyle from './components/GlobalStyle'
//Import Page
import AboutUs from './pages/AboutUS'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
//Router
import { Switch, Route } from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
