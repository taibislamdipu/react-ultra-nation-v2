import React from 'react';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Country from './components/Country/Country';

const App = () => {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>

          <Route path="/home" >
            <Home></Home>
          </Route>

          <Route path="/country" >
            <Country></Country>
          </Route>

          <Route path="/countryDetails/:name" >
            <CountryDetails></CountryDetails>
          </Route>

          <Route exact path="/" >
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

export default App;