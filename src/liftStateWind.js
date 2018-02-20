import ReactDOM from 'react-dom';
import axios from 'axios';
import React, { Component } from 'react';

export default class WeatherTable2 extends Component{
  constructor(props){
    super(props);

  };



  render(){
    return (
      <div>
        <table>
          <th>
            Wind Speed
            <th>
              {this.props.data.wind.speed}            
            </th> 
          </th> 
         
          <th>
            <th>
               Wind Direction
            </th>    
            {this.props.data.wind.deg}  
          </th>
        </table> 
      </div>
    );
  }   
}
