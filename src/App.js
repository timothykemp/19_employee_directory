import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import Directory from './components/Directory';

class App extends Component {

  state = {
    employees: [],
    sort: "ascending"
  };

  getEmployees = () => {
    const url = "https://randomuser.me/api/?results=50&nat=us"
    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        console.log('data >> ', data)

        this.setState({ employees: data.results })
      })
  }

  componentDidMount() {
    this.getEmployees();
  }

  render() {
    return (
      <div>
        <Header />
        <Directory employees={this.state.employees} />
      </div>
    )
  }
}

export default App;
