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
        sorted: "",
        search: ""
    };

    componentDidMount() {
        API.getEmployees()
            .then((res) => {
                this.setState({ employees: res.data.results });
            })
            .catch((err) => console.error(err));
    }

    handleInputChange = (event) => {
        if (event.target.name === "search") {
            const userSearch = event.target.value.toLowerCase();
            this.setState({
                search: userSearch
            });
        }
    };

    sortByFirstName = () => {
        const sortEmp = this.state.employees.sort((a, b) => {
            if (b.name.first > a.name.first) { return -1; }
            if (a.name.first > b.name.first) { return 1; }
            return 0;
        });

        if (this.state.sorted === "DESC") {
            sortEmp.reverse();
            this.setState({ sorted: "ASC" });
        } else {
            this.setState({ sorted: "DESC" });
        }
        this.setState({ employees: sortEmp });
    };

    sortByLastName = () => {
        const sortEmp = this.state.employees.sort((a, b) => {
            if (b.name.last > a.name.last) { return -1; }
            if (a.name.last > b.name.last) { return 1; }
            return 0;
        });

        if (this.state.sorted === "DESC") {
            sortEmp.reverse();
            this.setState({ sorted: "ASC" });
        } else {
            this.setState({ sorted: "DESC" });
        }
        this.setState({ employees: sortEmp });
    };

    render() {
        return (
            <Container>

                <Search
                    handleInputChange={this.handleInputChange}
                    search={this.state.search} />

                <Table striped bordered hover responsive className={style.Table}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>First Name <span className={style.downArrow} onClick={this.sortByFirstName}></span></th>
                            <th>Last Name <span className={style.downArrow} onClick={this.sortByLastName}></span></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    {
                        this.state.employees &&
                        this.state.employees.map((employee) =>
                            employee.name.first.toLowerCase().includes(this.state.search) ? (
                                <tbody key={employee.login.uuid}>
                                    <tr >
                                        <td>
                                            <img src={employee.picture.large} alt={employee.name.first + " " + employee.name.last} />
                                        </td>
                                        <td>{employee.name.first}</td>
                                        <td>{employee.name.last}</td>
                                        <td>{employee.phone}</td>
                                        <td>
                                            <a href={"mailto:" + employee.email}>{employee.email}</a>
                                        </td>
                                        <td>{dateFormat(employee.dob.date, "paddedShortDate")}</td>
                                    </tr>
                                </tbody>
                            ) :
                                employee.name.last.toLowerCase().includes(this.state.search) ? (
                                    <tbody key={employee.login.uuid}>
                                        <tr >
                                            <td>
                                                <img src={employee.picture.large} alt={employee.name.first + " " + employee.name.last} />
                                            </td>
                                            <td>{employee.name.first}</td>
                                            <td>{employee.name.last}</td>
                                            <td>{employee.phone}</td>
                                            <td>
                                                <a href={"mailto:" + employee.email}>{employee.email}</a>
                                            </td>
                                            <td>{dateFormat(employee.dob.date, "paddedShortDate")}</td>
                                        </tr>
                                    </tbody>
                                ) : null
                        )}
                </Table>
            </Container>
        )
    }
};

export default Directory;
