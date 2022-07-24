package backend.service;

import java.util.List;
import java.util.UUID;

import backend.model.EmployeeRequestDto;
import backend.model.EmployeeResponseDto;

public interface EmployeeService {

    List<EmployeeResponseDto> findAll();

    EmployeeResponseDto create(EmployeeRequestDto employeeRequestDto);

    void delete(UUID employeeId);
}
