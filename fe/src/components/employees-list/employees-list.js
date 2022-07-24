import EmployeeItem from "../employee-item/employee-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleChange, updateEmployee}) => {

    const employees = data.map(employee => {
        // return <EmployeeItem name={employee.name} salary={employee.salary}/>
        const {id, ...employeeProps} = employee;
        return <EmployeeItem
            key={id}
            {...employee}
            onDelete={() => onDelete(id)}
            updateEmployee={updateEmployee}
        />
    });

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    );
}

export default EmployeesList;
