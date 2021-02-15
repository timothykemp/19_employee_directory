import React, { Component } from "react";
import Container from "../Container";
import Search from "../Search";
import { Table } from 'react-bootstrap';
import dateFormat from 'dateformat';
import style from './style.module.css';
import API from "../../utils/API";

class Directory extends Component {

    state = {
        employees: [],
        filtered: [],
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getEmployees()
            .then((res) => {
                this.setState({ employees: res.data.results });
            })
            // .then(() => {
            //     this.setState({ filtered: this.state.employees })
            // })
            .catch((err) => console.error(err));
    };

    handleInputChange = (event) => {
        if (event.target.name === "search") {
            const userSearch = event.target.value.toLowerCase();
            this.setState({
                search: userSearch
            })
        }
        // event.preventDefault();
        // this.searchEmployees(event.targe.value);
    };

    render() {
        return (
            <Container>
                <Search handleInputChange={this.handleInputChange} search={this.state.search} />
                <Table striped bordered hover responsive className={style.Table}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th >Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee) => {
                                return (

                                    <tr key={employee.login.uuid}>
                                        <td><img src={employee.picture.large} alt={employee.name.first + " " + employee.name.last} /></td>
                                        <td>{employee.name.first + " " + employee.name.last}</td>
                                        <td>{employee.phone}</td>
                                        <td><a href={"mailto:" + employee.email}>{employee.email}</a></td>
                                        <td>{dateFormat(employee.dob.date, "paddedShortDate")}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
};

export default Directory;
