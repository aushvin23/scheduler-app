
import React, { Component } from 'react';
import myFile from './services/outfile.json'

class Schedule extends Component {

    render() {
        return (
            <div>
                <h3>Monday:{myFile[0].username}</h3>
                <h3>Tuesday: {myFile[1].username}</h3>
                <h3>Wednesday: {myFile[2].username}</h3>
                <h3>Thursday: {myFile[3].username}</h3>
                <h3>Friday: {myFile[4].username}</h3>
                <h3>Saturday: {myFile[5].username}</h3>
                <h3>Sunday: {myFile[6].username}</h3>

            </div>
        )
    }
  }
  export default Schedule;
