import React, { Component } from 'react';
import ApiList from '../ApiList';

require('dotenv').config()

class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: [],
            data: {url:'', key: ''},
            selection: 'https://api.nasa.gov/DONKI/CME?startDate=2017-01-01&endDate=2017-01-31&api_key=',
            index: 'note',
            default: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.fetchApi = this.fetchApi.bind(this);
    }
    message = 'Inside Api component on ';
    time = new Date();
    
    componentDidMount(){
        this.fetchApi();        
    }
    
    handleChange(event){
        const {options, selectedIndex} = event.target;
        const ind = options[selectedIndex].getAttribute('index');
        console.log(event.target.value);
        this.setState({
                        selection: event.target.value,
                        index: ind                        
                    }, () => this.fetchApi());        
    }
    fetchApi(){
        fetch( this.state.selection  + process.env.REACT_APP_API_KEY )
        .then(response => response.json())
         .then(json => { this.setState({obj: json}); console.log(this.state.obj)  })
         .catch(error => console.log(error))
    }
    
    render() {
      return (
            <div><p>{this.message}{this.time.toUTCString()}</p>

                    <label>
                    <p>Choice your API</p>
                    <select value={this.state.selection} onChange={this.handleChange} >
                        <option value="https://api.nasa.gov/DONKI/CME?startDate=2017-01-01&endDate=2017-01-31&api_key=" index="note">Coronal Mass Ejections</option>
                        <option value="https://api.nasa.gov/DONKI/GST?startDate=2017-01-01&endDate=2017-03-30&api_key=" index="startTime">Geomagnetic Storms</option>
                        <option value="https://api.nasa.gov/DONKI/FLR?startDate=2017-01-01&endDate=2017-06-30&api_key=" index="beginTime" >Solar Flares</option>
                        <option value="https://api.nasa.gov/DONKI/IPS?startDate=2016-01-01&endDate=2016-01-30&api_key=" index="eventTime">Interplanetary Shock</option>
                    </select>
                    </label>

            <ApiList list={this.state.obj} index={this.state.index} />
            
            </div>

        );
    }
}
export default Api;