import React from "react";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  getEmployees = () => {
    const url = "https://randomuser.me/api/?results=50"
    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        console.log('data >> ', data)
        return data;
      })
  }

  componentDidMount() {
    this.getEmployees();
  }

  render() {
    return <h1>Hello world!</h1>;
  }
}

export default App;
