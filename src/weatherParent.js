import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { Component } from 'react';
import WeatherTable from "./liftStateTemp.js";
import WeatherTable2 from "./liftStateWind.js";

export default class WeatherParent extends Component{
  constructor(){
    super();
    this.state={
      data: {
        main:{
          temp: 'loading...',
          humidity: 'loading...'
        },
        wind:{
          speed: 'loading...',
          deg: 'loading...'
        }
      }
    };
  }

  componentDidMount(){
    axios.get("http://api.openweathermap.org/data/2.5/weather?lat=45.6&lon=111&APPID=deb29dfd065c544e4164e76b251706d3").then((response)=>{
      this.setState({
        data: response.data,
      });
    });
  }
  render(){
    return(
      <div>
          
        <WeatherTable data={this.state.data}/>
        <WeatherTable2 data={this.state.data}/>
      </div>     
    );

  }
    
}
