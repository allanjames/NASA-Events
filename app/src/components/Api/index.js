import React, { Component } from 'react';
import ApiList from '../ApiList';

require('dotenv').config()

class Api extends Component {
    message = 'Inside Api component on ';
    time = new Date();
    
    state = {
        obj: []
    };
    componentDidMount(){
        
        fetch('https://api.nasa.gov/DONKI/CME?startDate=2017-01-01&endDate=2017-01-31&api_key='+process.env.REACT_APP_API_KEY)
        .then(response => response.json())
         .then(json => { this.setState({obj: json}); console.log(this.state.obj)  })
         .catch(error => console.log(error))
    }

    render() {
      return (
            <div><p>{this.message}{this.time.toUTCString()}</p>
            <ApiList list={this.state.obj} />
            
            </div>

        );
    }
}
export default Api;