import EmployeeItem from "../employee-item/employee-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const employees = data.map(employee => {
        // return <EmployeeItem name={employee.name} salary={employee.salary}/>
        return <EmployeeItem {...employee}/>
    });

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    );
}

export default EmployeesList;