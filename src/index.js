import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props) {
        super(props);

        //This is the only time we do direct assignment to this.state
        this.state = { lat: 40, long: 40 };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
                this.setState({long: position.coords.longitude})
            },
            (err) => console.log(err)
        );
    }

    // React says we have to define render!!
    render () {
        return (
            <div>
                <div>Latitude: {this.state.lat}</div>
                <div>Longitude: {this.state.long}</div>
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));