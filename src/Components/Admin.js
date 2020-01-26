
import React, { Component } from 'react';
import Axios from 'axios';
import * as fs from 'fs';
import myFile from './services/outfile.json'

class Admin extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        employeeNames: [],
        userOneScore: '',
        userTwoScore: '',
        userThreeScore: '',
        userFourScore: '',
        userFiveScore: '',
        userSixScore: '',
        userSevenScore: '',
        employeeList: Array
      };
    }

    componentDidMount() {
        this.getUserName();
    }

    getUserName = () => {
        Axios({
            method: 'get',
            url: 'http://localhost:5000/api/v1/employee/all'
        }).then((res)=> {
            const employeeNameList = []
            for (let i=0;i<res.data.length;i++) {
                employeeNameList[i] = res.data[i].username
            }
            console.log(employeeNameList);
            this.setState({
                employeeNames: employeeNameList,
            })
        })
    }

    handleChangeUserOneScore = (event) => {
        this.setState({
          userOneScore: event.target.value
        })
    }

    handleChangeUserTwoScore = (event) => {
        this.setState({
          userTwoScore: event.target.value
        })
    }

    handleChangeUserThreeScore = (event) => {
        this.setState({
          userThreeScore: event.target.value
        })
    }

    handleChangeUserFourScore = (event) => {
        this.setState({
          userFourScore: event.target.value
        })
    }

    handleChangeUserFiveScore = (event) => {
        this.setState({
          userFiveScore: event.target.value
        })
    }

    handleChangeUserSixScore = (event) => {
        this.setState({
          userSixScore: event.target.value
        })
    }

    handleChangeUserSevenScore = (event) => {
        this.setState({
          userSevenScore: event.target.value
        })
    }

    scheduleButton = () => {
        const employeeScore = [];
        employeeScore[0] = this.state.userOneScore;
        employeeScore[1] = this.state.userTwoScore;
        employeeScore[2] = this.state.userThreeScore;
        employeeScore[3] = this.state.userFourScore;
        employeeScore[4] = this.state.userFiveScore;
        employeeScore[5] = this.state.userSixScore;
        employeeScore[6] = this.state.userSevenScore;
        console.log(employeeScore);

        const employeeNameWithScore = [];
        for (let i=0;i<employeeScore.length;i++){
            employeeNameWithScore[i]={
                "username":this.state.employeeNames[i],
                "priority": employeeScore[i]      
            }
        }
        console.log(employeeNameWithScore);

        let x = [];
        for (let i=0;i<employeeNameWithScore.length;i++) {
            x.push(Axios({
                method:'put',
                url:'http://localhost:5000/api/v1/employee/all',
                data: employeeNameWithScore[i],
            })
            )
        }

        console.log(myFile)


    }

    
  
    render() {
        return (
            <div>
                <h1>Hellos whats popping admin</h1>
                <ul>

                    <h3>{this.state.employeeNames[0]}</h3>
                    <input 
                        onChange={this.handleChangeUserOneScore}
                        value={this.state.userOneScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-Highest, 1-Lowest)"
                    />

                    <h3>{this.state.employeeNames[1]}</h3>
                    <input 
                        onChange={this.handleChangeUserTwoScore}
                        value={this.state.userTwoScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-Highest, 1-Lowest)"
                    />

                    <h3>{this.state.employeeNames[2]}</h3>
                    <input 
                        onChange={this.handleChangeUserThreeScore}
                        value={this.state.userThreeScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-High, 1-Low)"
                    />

                    <h3>{this.state.employeeNames[3]}</h3>
                    <input 
                        onChange={this.handleChangeUserFourScore}
                        value={this.state.userFourScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-Highest, 1-Lowest)"
                    />

                    <h3>{this.state.employeeNames[4]}</h3>
                    <input 
                        onChange={this.handleChangeUserFiveScore}
                        value={this.state.userFiveScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-Highest, 1-Lowest)"
                    />

                    <h3>{this.state.employeeNames[5]}</h3>
                    <input 
                        onChange={this.handleChangeUserSixScore}
                        value={this.state.userSixScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-Highest, 1-Lowest)"
                    />

                    <h3>{this.state.employeeNames[6]}</h3>
                    <input 
                        onChange={this.handleChangeUserSevenScore}
                        value={this.state.userSevenScore}
                        name="userInput"
                        type="text"
                        placeholder="(7-Highest, 1-Lowest)"
                    />

                </ul>
                <button onClick={this.scheduleButton}>Submit and our scheduler!</button>
            </div>
        )
    }
  }
  export default Admin;

//   <input 
//   onChange={this.handleChangeUserInput}
//   value={this.state.userId}
//   name="userInput"
//   type="text"
//   placeholder="Type in your User ID"
// />