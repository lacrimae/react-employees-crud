package backend.controller;

import java.util.List;

import backend.model.EmployeeRequestDto;
import backend.model.EmployeeResponseDto;
import backend.service.EmployeeService;
import static backend.support.EmployeeConstraints.BASE_ENDPOINT_MAPPING;
import static java.util.Collections.emptyList;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(BASE_ENDPOINT_MAPPING)
@RequiredArgsConstructor
public class EmployeeController implements EmployeeApi {
    private final EmployeeService employeeService;

    @Override public ResponseEntity<EmployeeResponseDto> createEmployee(EmployeeRequestDto employeeRequestDto) {
        return EmployeeApi.super.createEmployee(employeeRequestDto);
    }

    @Override public ResponseEntity<Void> deleteEmployee(String employeeId) {
        return null;
    }

    @Override
    public ResponseEntity<List<EmployeeResponseDto>> getEmployee() {
        //        return ResponseEntity.ok(employeeService.getAllEmployees());
        return ResponseEntity.ok(emptyList());
    }

    @Override
    public ResponseEntity<EmployeeResponseDto> updateEmployee(String employeeId, EmployeeRequestDto employeeRequestDto) {
        return null;
    }
}
