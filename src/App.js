import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Views/HomePage/HomePage';
import Whois from './Views/Whois/Whois';
import Skills from './Views/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
<Navbar/>
<HomePage/>
<Whois />
<Skills/>
      </div>
    );
  }
}

export default App;
