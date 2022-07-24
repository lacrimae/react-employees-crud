package backend.service;

import java.util.List;
import java.util.UUID;

import backend.model.EmployeeRequestDto;
import backend.model.EmployeeRequestUpdateDto;
import backend.model.EmployeeResponseDto;
import backend.model.EmployeeResponseUpdateDto;

public interface EmployeeService {

    List<EmployeeResponseDto> findAll();

    EmployeeResponseDto create(EmployeeRequestDto employeeRequestDto);

    void delete(UUID employeeId);

    EmployeeResponseUpdateDto update(UUID employeeId, EmployeeRequestUpdateDto dto);
}
