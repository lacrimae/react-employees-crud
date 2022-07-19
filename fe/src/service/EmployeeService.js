import GeneralService from "./GeneralService";

class EmployeeService extends GeneralService {
    getEmployees = () => {
        return this.getResource('employee');
    }

    createEmployee = (employee) => {
        return this.postResource('employee', employee);
    }

    deleteEmployee = (id) => {
        return this.deleteResource(`employee/${id}`);
    }
}

export default EmployeeService;
