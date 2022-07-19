package backend.repository.impl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import backend.model.Employee;
import backend.repository.EmployeeRepository;
import static backend.repository.tables.Employee.EMPLOYEE;
import backend.repository.tables.records.EmployeeRecord;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.jooq.Result;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class EmployeeRepositoryImpl implements EmployeeRepository {

    private final DSLContext dsl;

    @Override
    public List<Employee> findAll() {
        Result<EmployeeRecord> employees = dsl.selectFrom(EMPLOYEE)
                .fetch();
        return employees.stream()
                .map(Employee::of)
                .collect(Collectors.toList());
    }

    @Override
    public Employee save(Employee employee) {
        dsl.insertInto(EMPLOYEE)
                .set(EMPLOYEE.ID, employee.getId())
                .set(EMPLOYEE.NAME, employee.getName())
                .set(EMPLOYEE.SALARY, employee.getSalary())
                .execute();

        EmployeeRecord employeeRecord = dsl.selectFrom(EMPLOYEE)
                .where(EMPLOYEE.ID.eq(employee.getId()))
                .fetchOne();

        //todo: throw exception if employee not found?

        return Employee.of(employeeRecord);
    }
}
