import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import BrowseArt from './components/BrowseArt';
import SubmitArt from './components/SubmitArt';
import Suggestions from './components/Suggestions';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/browseart' component={BrowseArt} />
        <Route path='/submitart' component={SubmitArt} />
        <Route path='/suggestions' component={Suggestions} />
      </div>
    </BrowserRouter>
  );
}

export default App;
