import './app.css';
import Info from '../info/info';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

function App() {

    // todo: replace with real data
    const data = [
        {id: 1, name: 'John C.', salary: 800, isPromoted: false},
        {id: 2, name: 'Alex M.', salary: 10000, isPromoted: true},
        {id: 3 , name: 'Carl W.', salary: 8515, isPromoted: true}
    ];

    return (
        <div className="app">
            <Info/>

            <div className="search-panel">
                <SearchPanel/>
                <Filter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeeAddForm/>

        </div>
    );
}

export default App;
