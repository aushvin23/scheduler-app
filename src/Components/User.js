import React, { Component } from 'react';

class User extends Component{

  constructor(props) {
    super(props);
    this.state = { 
        dayList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
    };
  }

  render() {
    return this.state.dayList.map((day)=> {
        return (
            <div>
                <h3>{day}</h3>
                <input></input>
            </div>
        )
    })
  }

}

export default User;