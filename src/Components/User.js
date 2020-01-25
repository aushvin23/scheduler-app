import React, { Component } from 'react';
import Axios from 'axios';

class User extends Component{

  constructor(props) {
    super(props);
    this.state = { 
        dayList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        userInfo: {"username":"Aushvin Vasanth", "priority": "6", "timeRequest": [7,1,6,2,5,3,4]},
        userId: String,
        Monday: String,
        Tuesday: String,
        
    };
  }

  componentDidMount() {
    Axios({
      method: 'get',
      url: `http://localhost:5000/api/v1/employee/all`,
    }).then((res) => {
        console.log(res);
    })}

    submit = () => {
        Axios({
            method:'post',
            url:'http://localhost:5000/api/v1/employee/all',
            data: this.state.userInfo,
        }).then((res)=> {
            console.log(res)
        })
    }

    handleChangeUserInput = (event) => {
        this.setState({
          userId: event.target.value
        })
    }

    handleSubmit = (event) => {
    event.preventDefault();
    }
  



  render() {

    const calender = this.state.dayList.map((day, key)=> {
        return (
            <div>
                <h3>{day}</h3>
                <input></input>
            </div>
        )
    });
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
            <button onClick={this.handleSubmit}>Submit</button>
            <div>{calender}</div>
            <button onClick={this.submit}>Submit Entry</button>
        </div>
    )

  }

}

export default User;