package backend.service.impl;

import java.util.List;
import java.util.UUID;

import backend.model.Employee;
import backend.model.EmployeeRequestDto;
import backend.model.EmployeeResponseDto;
import backend.repository.EmployeeRepository;
import backend.service.EmployeeService;
import backend.service.mapper.EmployeeRequestMapper;
import backend.service.mapper.EmployeeResponseMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    //todo: add logging
    private final EmployeeRepository employeeRepository;
    private final EmployeeResponseMapper employeeResponseMapper;
    private final EmployeeRequestMapper employeeRequestMapper;

    @Override
    public List<EmployeeResponseDto> findAll() {
        List<Employee> employees = employeeRepository.findAll();
        return employeeResponseMapper.toDto(employees);
    }

    @Override
    public EmployeeResponseDto create(EmployeeRequestDto employeeRequestDto) {
        Employee employee = employeeRequestMapper.toEntity(employeeRequestDto);
        employeeRepository.save(employee);
        return employeeResponseMapper.toDto(employee);
    }

    @Override
    public void delete(UUID employeeId) {
        employeeRepository.delete(employeeId);
    }
}
