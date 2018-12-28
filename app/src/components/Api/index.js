import React, { Component } from 'react';

require('dotenv').config()

class Api extends Component {
    message = 'Inside Api component on ';
    time = new Date();
    
    stat = {
        obj: []
    };
    componentDidMount(){
        
        fetch('https://api.nasa.gov/planetary/apod?api_key='+process.env.REACT_APP_API_KEY)
        .then(response => response.json())
         .then(json => { console.log(json) })
         .catch(error => console.log(error))
    }

    render() {
      return (<div>{this.message}{this.time.toUTCString()}</div>);
    }
}
export default Api;