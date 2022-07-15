import './info.css';
import {Component} from "react";

class Info extends Component {
    render() {
        const employees = this.props.employees;
        const promotedEmployees = this.props.employees.filter(e => e.isPromoted);

        return (
            <div className="info">
                <h1>Employees in the company</h1>
                <h2>
                    The total number of employees in the company is: <b>{employees.length}</b>
                </h2>
                <h2>
                    Employees which receive a bonus are: <b>{promotedEmployees.length}</b>
                </h2>
            </div>
        );
    };
}

export default Info;
