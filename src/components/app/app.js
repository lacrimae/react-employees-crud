import './app.css';
import Info from '../info/info';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

function App() {
    return (
        <div className="app">
            <Info/>

            <div className="search-panel">
                <SearchPanel/>
                <Filter/>
            </div>

            <EmployeesList/>
            <EmployeeAddForm/>

        </div>
    );
}

export default App;
