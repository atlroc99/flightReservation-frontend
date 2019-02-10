import React from 'react';

class FindFlights extends React.Component {

    searchFlights(event){
        event.preventDefault();
        // this.props.history.push('displayFlight/'+this.fromCity+'/'+this.toCity+'/'+this.departureDate);
        this.props.history.push('/displayFlight/'+this.fromCity+'/'+this.toCity);
    }

    render() {
        return (<div>
            <h1>Find Fligts</h1>
            <form>
                From : <input type="text" name="fromCity" onChange={(event)=>{this.fromCity=event.target.value}}/>
                To: <input type="text" name="toCity" onChange={(e)=>{this.toCity=e.target.value}}/>
                {/* Departure Date: <input type="" name="departureDate" onChange={(e)=>{this.departureDate=e.target.value}}/> */}
                <button onClick={this.searchFlights.bind(this)}>find flights</button>
            </form>
        </div>);
    }
}

export default FindFlights;