import React, { Component } from "react";
import Header from './components/Header';
import Directory from './components/DataTable';
// import API from "./utils/API";

class App extends Component {

  state = {
    employees: [],
    search: "",
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

// import Header from './components/Header';
// import Directory from './components/DataTable';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Directory />
//     </div>
//   )
// }

export default App;
