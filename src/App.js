import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FindFlights from './components/FindFlights';
import DisplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={FindFlights}/>
          {/* <Route exact path="/displayFlight/:fromCity/:toCity/:departureDate" component={DisplayFlights}/> */}
          <Route exact path="/displayFlight/:fromCity/:toCity" component={DisplayFlights}/>
          <Route exact path="/passengerDetails/:flightId" component={PassengerDetails}/>
          <Route exact path="/reservationCofirmation/:reservationId" component={ConfirmReservation}/>
        </Switch>
      </div>
    );
  }
}

export default App;
