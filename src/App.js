import React, { Component } from 'react';
import AboutUS from './pages/AboutUS';
//Global style
import GlobalStyle from './components/GlobalStyle'
//Import Page
import AboutUs from './pages/AboutUS'
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <AboutUS/>
      </div>
    );
  }
}

export default App;
