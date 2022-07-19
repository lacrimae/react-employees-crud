package backend.repository;

import java.util.List;

import backend.model.Employee;

public interface EmployeeRepository {

    List<Employee> findAll();

    Employee save(Employee employee);
}
