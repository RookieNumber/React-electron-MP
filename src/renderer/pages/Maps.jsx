import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',

};

class Peta extends Component {
    render() {
        return (
            <Map className="Maps"
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{ lat: - 7.781192654239034, lng: 110.39471782694474 }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBCsK181-_y0LC1Vn1TcvRAVjSONKUXIzk'
})(Peta);
