import EmployeeItem from "../employee-item/employee-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const employees = data.map(employee => {
        // return <EmployeeItem name={employee.name} salary={employee.salary}/>
        const {id, ...employeeProps} = employee;
        return <EmployeeItem
            key={id}
            {...employeeProps}
            onDelete={() => onDelete(id)}
        />
    });

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    );
}

export default EmployeesList;
