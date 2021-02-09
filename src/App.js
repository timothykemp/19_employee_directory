import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Directory from "./components/Directory"

class App extends React.Component {

  state = {
    employees: [],
    sort: "ascending"
  };

  getEmployees = () => {
    const url = "https://randomuser.me/api/?results=50"
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
    return <Directory employees={this.state.employees} />;
  }
}

export default App;
