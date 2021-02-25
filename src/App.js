
import {Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import './App.css';
import countriesFromJSON from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetails';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
  return (
    <div className="App">

      <Navbar/>

      <div className="container">
        <div className="row">
          <CountriesList countriesList={countriesFromJSON} />
          <Switch> 
            <Route 
              exact 
              path='/:countrycode' 
              render={ (routerProps) => 
                <CountryDetail {...routerProps} countriesList={countriesFromJSON} />
              } 
            />
          </Switch>
        </div>
      </div>
      
    </div>
  );
}

}
export default App;
