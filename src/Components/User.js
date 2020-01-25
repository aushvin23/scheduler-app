import React, { Component } from 'react';

class User extends Component{

  constructor(props) {
    super(props);
    this.state = { 
        dayList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        userInfo: {}
    };
  }

  render() {

    const calender = this.state.dayList.map((day)=> {
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
            <input></input>
            <div>{calender}</div>
            <button>Submit Entry</button>
        </div>
    )

  }

}

export default User;