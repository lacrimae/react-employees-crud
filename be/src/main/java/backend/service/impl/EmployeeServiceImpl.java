package backend.service.impl;

import java.util.List;
import java.util.UUID;

import backend.model.Employee;
import backend.model.EmployeeRequestDto;
import backend.model.EmployeeRequestUpdateDto;
import backend.model.EmployeeResponseDto;
import backend.model.EmployeeResponseUpdateDto;
import backend.repository.EmployeeRepository;
import backend.service.EmployeeService;
import backend.service.mapper.EmployeeRequestMapper;
import backend.service.mapper.EmployeeRequestUpdateMapper;
import backend.service.mapper.EmployeeResponseMapper;
import backend.service.mapper.EmployeeResponseUpdateMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    //todo: add logging
    private final EmployeeRepository employeeRepository;
    private final EmployeeResponseMapper employeeResponseMapper;
    private final EmployeeRequestMapper employeeRequestMapper;
    private final EmployeeRequestUpdateMapper employeeRequestUpdateMapper;
    private final EmployeeResponseUpdateMapper employeeResponseUpdateMapper;

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

    @Override
    public EmployeeResponseUpdateDto update(UUID employeeId, EmployeeRequestUpdateDto dto) {
        Employee employee = employeeRequestUpdateMapper.toEntity(dto);
        Employee updatedEmployee = employeeRepository.update(employeeId, employee);
        return employeeResponseUpdateMapper.toDto(updatedEmployee);
    }
}
