package backend.service;

import java.util.List;

import backend.model.EmployeeResponseDto;

public interface EmployeeService {

    List<EmployeeResponseDto> getAllEmployees();
}
