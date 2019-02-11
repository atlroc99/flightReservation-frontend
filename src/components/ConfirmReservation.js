import React from 'react';
import axios from 'axios';

class ConfirmReservation extends React.Component {

    reservationConfirm = 0;
    flight = {}
    passenger ={}

    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.reservationConfirm = this.props.match.params.reservationId;
        var url = 'http://localhost:8090/flightservices/reservations/' + this.reservationConfirm;
        console.log('get reservation : ', url);

        axios.get(url)
            .then((res) => {
                this.setState(res.data);
                console.log('state', this.state);
                this.flight = this.state.flight;
                this.passenger = this.state.passenger;

                console.log('flight',this.flight);
                console.log('Passenger',this.passenger);
                
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (<div>
            <h1>Reservation Information</h1>
            <p><b>Your reservation is confirmed. <br />Confirmation ID : </b> {this.reservationConfirm} </p>

            <table>
                <thead>
                    <tr>
                        <td>Reservation Id</td>
                        <td>Flight No</td>
                        <td>Departure City</td>
                        <td>Arrival City</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.reservationConfirm}</td>
                        <td>{this.flight.flightNumber}</td>
                        <td>{this.flight.departureCity}</td>
                        <td>{this.flight.arrivalCity}</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Middle Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.passenger.firstName}</td>
                        <td>{this.passenger.middleName}</td>
                        <td>{this.passenger.lastName}</td>
                        <td>{this.passenger.email}</td>
                        <td>{this.passenger.phone}</td>
                    </tr>
                </tbody>
            </table>

        </div>);
    }
}
export default ConfirmReservation;