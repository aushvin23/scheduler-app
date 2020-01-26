import React, { Component } from 'react';
import Axios from 'axios';

class User extends Component{

  constructor(props) {
    super(props);
    this.state = { 
        dayList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        userInfo: {"username":"Aushvin Vasanth", "priority": "6", "timeRequest": [7,1,6,2,5,3,4]},
        userId: String,
        monday: Number,
        tuesday: Number,
        wednesday: Number,
        thursday: Number,
        friday: Number,
        saturday: Number,
        sunday: Number,
    };
  }
    submit = () => {
        const userInfo = {
            "username": this.state.userId,
            "timeRequest": 
                [   this.state.monday,
                    this.state.tuesday,
                    this.state.wednesday,
                    this.state.thursday,
                    this.state.friday,
                    this.state.saturday,
                    this.state.sunday
                ]
        }

        Axios({
            method:'post',
            url:'http://localhost:5000/api/v1/employee/all',
            data: userInfo,
        }).then((res)=> {
            console.log(res)
        })
    }

    handleChangeUserInput = (event) => {
        this.setState({
          userId: event.target.value
        })
    }

    handleChangeMonday = (event) => {
        this.setState({
          monday: event.target.value
        })
    }

    handleChangeTuesday = (event) => {
        this.setState({
          tuesday: event.target.value
        })
    }

    handleChangeWednesday = (event) => {
        this.setState({
          wednesday: event.target.value
        })
    }

    handleChangeThursday = (event) => {
        this.setState({
          thursday: event.target.value
        })
    }

    handleChangeFriday = (event) => {
        this.setState({
          friday: event.target.value
        })
    }

    handleChangeSaturday = (event) => {
        this.setState({
          saturday: event.target.value
        })
    }

    handleChangeSunday = (event) => {
        this.setState({
          sunday: event.target.value
        })
    }

    handleSubmit = (event) => {
    event.preventDefault();
    }

  
  render() {
    return (
        <div>
            <h3>User-Id</h3>
            <input 
                onChange={this.handleChangeUserInput}
                value={this.state.userId}
                name="userInput"
                type="text"
                placeholder="Type in your User ID"
             />

            <h3>Monday</h3>
            <input 
                onChange={this.handleChangeMonday}
                value={this.state.monday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <h3>Tuesday</h3>
            <input 
                onChange={this.handleChangeTuesday}
                value={this.state.tuesday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <h3>Wednesday</h3>
            <input 
                onChange={this.handleChangeWednesday}
                value={this.state.wednesday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <h3>Thursday</h3>
            <input 
                onChange={this.handleChangeThursday}
                value={this.state.thursday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <h3>Friday</h3>
            <input 
                onChange={this.handleChangeFriday}
                value={this.state.friday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <h3>Saturday</h3>
            <input 
                onChange={this.handleChangeSaturday}
                value={this.state.saturday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <h3>Sunday</h3>
            <input 
                onChange={this.handleChangeSunday}
                value={this.state.sunday}
                name="userInput"
                type="text"
                placeholder="Type in your ranking"
             />

            <button onClick={this.submit}>Submit Entry</button>
        </div>
    )

  }

}

export default User;