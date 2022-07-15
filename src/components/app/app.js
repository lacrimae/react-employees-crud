import {Component} from "react";

import './app.css';
import Info from '../info/info';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // todo: replace with real data
            employees: [
                {id: crypto.randomUUID(), name: 'John C.', salary: 800, isPromoted: false, isFavorite: true},
                {id: crypto.randomUUID(), name: 'Alex M.', salary: 10000, isPromoted: true, isFavorite: false},
                {id: crypto.randomUUID(), name: 'Carl W.', salary: 8515, isPromoted: true, isFavorite: false},
            ]
        }
    }

    deleteEmployee = (id) => {
        this.setState(({employees}) => {
            return {
                employees: employees.filter(e => e.id !== id)
            };
        });
        console.log(`Employee with id: ${id} has been deleted.`);
    }

    addEmployee = (name, salary) => {
        //todo: add error popup (non a message in console)
        function validateAddEmployee(name, salary) {
            //todo: add regex for salary (can't start with 0)
            if (name.length === 0 || salary.length === 0) {
                throw new Error('Name and/or salary are required.');
            }
        }

        validateAddEmployee(name, salary);
        const id = crypto.randomUUID();
        this.setState(({employees}) => {
            return {
                employees: [...employees, {id: crypto.randomUUID(), name, salary, isPromoted: false, isFavorite: false}]
            };
        });
        console.log(`Employee with id: ${id} has been added.`);
    }

    onToggleChange = (id, prop) => {
        this.setState(({employees}) => {
            return {
                employees: employees.map(employee => {
                    if (employee.id === id) {
                        return {...employee, [prop]: !employee[prop]};
                    }
                    return employee;
                })
            };
        });
    }

    render() {
        return (
            <div className="app">
                <Info employees={this.state.employees}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>

                <EmployeesList data={this.state.employees}
                               onDelete={this.deleteEmployee}
                               onToggleChange={this.onToggleChange}/>
                <EmployeeAddForm addEmployee={this.addEmployee}/>

            </div>
        );
    }
}

export default App;
