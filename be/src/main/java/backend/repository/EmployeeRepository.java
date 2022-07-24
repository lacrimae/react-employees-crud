package backend.repository;

import java.util.List;
import java.util.UUID;

import backend.model.Employee;

public interface EmployeeRepository {

    List<Employee> findAll();

    Employee save(Employee employee);

    void delete(UUID employeeId);
}
