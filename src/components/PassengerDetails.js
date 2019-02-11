import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component {

    state = {}
    flightId = 0;
    
    componentWillMount(){
        this.flightId = this.props.match.params.flightId;
        var url = 'http://localhost:8090/flightservices/flights/' + this.flightId;
        console.log('url', url);
        axios.get(url)
        .then((res) => {
            this.setState(res.data);
            console.log(this.state);
        })
        .catch(function (err){
            console.log(err);
        })
    }

    submitReservation(e) {
        e.preventDefault();
        console.log(e.target.value);
        
        const reservation = {
            flightId: this.flightId,
            firstName: this.firstName,
            middle: this.middleName,
            lastName: this.lastName,
            email: this.email,
            phone:this.phone,
            cardType: this.cardType,
            cardNo: this.cardNo,
            expirationDate: this.expDate
        }

        console.log('sending data', reservation);

        var url = 'http://localhost:8090/flightservices/reservations'
        axios.post(url, reservation)
        .then(res => {
            console.log(res.data);
            this.props.history.push('/reservationCofirmation/' + res.data.id);
        })
        .catch( err => {
            console.log(err);
        })
    }

    render() {
        return (
        <div>
            <h1>Flight-reservation</h1>
            <hr/>
            <h4>Flight Information</h4>
            <b>Flight No:</b> {this.state.flightNumber} <br/>
            <b>Airline</b>  : {this.state.operatingAirlines} <br/>
            <b>Departure City:</b> {this.state.departureCity} <br/>
            <b>Arrival City:</b> {this.state.arrivalCity} <br/>
            <b>Date and time of depature:</b> {this.state.dateOfDeparture} <br/>

            <div>
                <h3>Passenger information</h3>
                <form>
                    <b>First Name:</b> <input type="text" name="firstName" onChange={(e)=>{this.firstName=e.target.value}}/> <br/>
                    <b>Middle Name:</b> <input type="text" name="middleName" onChange={(e)=>{this.middleName=e.target.value}}/> <br/>
                    <b>Last Name:</b> <input type="text" name="lastName" onChange={(e)=>{this.lastName=e.target.value}}/> <br/>
                    <b>Email:</b> <input type="text" name="email" onChange={(e)=>{this.email=e.target.value}}/> <br/>
                    <b>Phone:</b> <input type="text" name="phone" onChange={(e)=>{this.phone=e.target.value}}/> <br/>

                    <h3>Payment information:</h3>
                    <b>Card Type:</b> <input type="text" name="cardType" onChange={(e)=>{this.cardType=e.target.value}}/><br/>
                    <b>Card number</b> <input type="text" name="cardNo" onChange={(e)=>{this.cardNo=e.target.value}}/><br/>
                    <b>Expiration Date</b> <input type="text" name="expDate" onChange={(e)=>{this.expDate=e.target.value}}/><br/>
                    <button onClick={this.submitReservation.bind(this)}>submit</button>
                </form>
            </div>


        </div>);
    }
}

export default PassengerDetails;