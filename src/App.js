import React from 'react';
import { Board } from './components/Board';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { HomeScreen } from './components/HomeScreen';
import { Tutorial } from './components/Tutorial';
import "../src/assets/css/app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/game" component={Board}/>
          
        <Route exact path="/tutorial" component={Tutorial}/>

        <Route path="/" component={HomeScreen}/>

      </Switch>
    </Router>
  );
}

export default App;
