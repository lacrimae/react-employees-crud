import {Component} from "react";
import './app.css';
import Info from '../info/info';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import EmployeeService from "../../service/EmployeeService";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            term: '',
            filter: 'all'
        }
    }

    componentDidMount() {
        this.getEmployees();
    }

    employeeService = new EmployeeService();

    deleteEmployee = async (id) => {
        const employeeService = new EmployeeService();
        employeeService.deleteEmployee(id)
            .then(() => {
                    const employees = this.state.employees.filter(employee => employee.id !== id);
                    this.setState({employees});
                    console.log(`Employee with id: ${id} has been deleted.`);
                }
            )
    }

    addEmployee = (name, salary) => {
        const employeeService = new EmployeeService();

        //todo: add error popup (non a message in console)
        function validateAddEmployee(name, salary) {
            //todo: add regex for salary (can't start with 0)
            if (name.length === 0 || salary.length === 0) {
                throw new Error('Name and/or salary are required.');
            }
        }

        validateAddEmployee(name, salary);
        const employee = {name, salary};

        employeeService.createEmployee(employee)
            .then(savedEmployee => {
                this.setState(({employees}) => {
                    console.log(`Employee with id: ${savedEmployee.id} has been added.`);
                    return {
                        employees: [...employees, savedEmployee]
                    };
                })
            });
    }

    updateEmployee = (employee) => {
        const employeeService = new EmployeeService();
        employeeService.updateEmployee(employee)
            .then(updatedEmployee => {
                this.setState(({employees}) => {
                    console.log(`Employee with id: ${updatedEmployee.id} has been updated.`);
                    return {
                        employees: employees.map(e => e.id === updatedEmployee.id ? updatedEmployee : e)
                    };
                })
            });
    }

    searchEmployees = (employees, term) => {
        if (term.length === 0) {
            return employees;
        }

        return employees.filter(employee => {
            return employee.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filterEmployees = (employees, filter) => {
        return employees.filter(employee => {
                switch (filter) {
                    case 'promoted':
                        return employee.isPromoted;
                    case 'favorite':
                        return employee.isStarred;
                    case 'moreThan1000':
                        return employee.salary > 1000;
                    default:
                        return employee;
                }
            }
        );
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onSelectFilter = (filter) => {
        this.setState({filter});
    }

    getEmployees = () => {
        this.employeeService.getEmployees()
            .then(data => {
                this.setState({employees: data});
            });
    }

    render() {
        const {employees, term, filter} = this.state;
        let visibleEmployees = this.searchEmployees(employees, term);
        visibleEmployees = this.filterEmployees(visibleEmployees, filter);

        return (
            <div className="app">
                {/*todo: add pages (5 employees per page), ability to change page*/}
                <Info employees={employees}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <Filter
                        filter={filter}
                        onSelectFilter={this.onSelectFilter}/>
                </div>

                <EmployeesList data={visibleEmployees}
                               onDelete={this.deleteEmployee}
                               onToggleChange={this.onToggleChange}
                               updateEmployee={this.updateEmployee}/>
                <EmployeeAddForm addEmployee={this.addEmployee}/>

            </div>
        );
    }
}

export default App;
