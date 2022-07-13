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
                {id: crypto.randomUUID(), name: 'John C.', salary: 800, isPromoted: false},
                {id: crypto.randomUUID(), name: 'Alex M.', salary: 10000, isPromoted: true},
                {id: crypto.randomUUID(), name: 'Carl W.', salary: 8515, isPromoted: true}
            ]
        }
    }

    deleteEmployee = (id) => {
        this.setState(({employees}) => {
            return {
                employees: employees.filter(e => e.id !== id)
            }
        });
        console.log(`Employee with id: ${id} has been deleted.`);
    }

    render() {
        return (
            <div className="app">
                <Info/>

                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>

                <EmployeesList data={this.state.employees}
                               onDelete={this.deleteEmployee}/>
                <EmployeeAddForm/>

            </div>
        );
    }
}

export default App;
