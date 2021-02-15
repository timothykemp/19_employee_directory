import React, { Component } from "react";
import Container from "../Container";
import Search from "../Search";
import TableBody from "../TableBody";
import API from "../../utils/API";

class Directory extends Component {
    state = {
        employees: [],
        filtered: "",
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getEmployees()
            .then((res) => {
                this.setState({ employees: res.data.results });
            })
            .then(() => {
                this.setState({ filtered: this.state.employees })
            })
            .catch((err) => console.error(err));
    };

    render() {
        return (
            <Container>
                <Search />
                <TableBody employees={this.state.employees} />
            </Container>
        )
    }
};

export default Directory;
