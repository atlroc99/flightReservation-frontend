import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DisplayFlights extends React.Component {

    state = {
        flights:[]
    }

    componentWillMount() {
        console.log("inside componentWilLMount");

        const fromCity = this.props.match.params.fromCity;
        const toCity = this.props.match.params.toCity;

        console.log("fromCity: " + fromCity);
        console.log("toCity: " + toCity);

        var url = 'http://localhost:8090/flightservices/flights?fromCity=' + fromCity + '&toCity=' + toCity;
        console.log("Calling GET: " + url);

        axios.get(url)
            .then(response => {
                const data = response.data;
               // console.log('Response, ', data);
                this.setState({flights: data});
                console.log("state, " , this.state.flights);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (<div>
            <title>Display Flights</title>
            <h1>Flights</h1>

            <table style={{padding: 30}} >
                <thead>
                    <tr>
                        <td>Flight Number</td>
                        <td>Operating Airlines</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Departure date</td>
                        <td>Time Of departure</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.flights.map( (f) => <RowCreator item={f}/>)}
                </tbody>
            </table>
        </div>);
    }
}

class RowCreator extends React.Component{
    render () {
        var flight = this.props.item;
        return (
            <tr key={flight.id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.operatingAirlines}</td>
                <td>{flight.departureCity}</td>
                <td>{flight.arrivalCity}</td>
                <td>{flight.dateOfDeparture}</td>
                <td>{flight.estimatedDepartureTime}</td>
                <td><Link to={'/passengerDetails/'+ flight.id}>Select</Link></td>
            </tr>
        )
    }
}

export default DisplayFlights;