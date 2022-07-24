package backend.controller;

import java.util.List;
import java.util.UUID;

import backend.model.EmployeeRequestDto;
import backend.model.EmployeeRequestUpdateDto;
import backend.model.EmployeeResponseDto;
import backend.model.EmployeeResponseUpdateDto;
import backend.service.EmployeeService;
import static backend.support.EmployeeConstraints.BASE_ENDPOINT_MAPPING;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(BASE_ENDPOINT_MAPPING)
@RequiredArgsConstructor
public class EmployeeController implements EmployeeApi {
    private final EmployeeService employeeService;

    //todo: add logging

    @Override
    public ResponseEntity<EmployeeResponseDto> createEmployee(EmployeeRequestDto employeeRequestDto) {
        return ResponseEntity.ok(employeeService.create(employeeRequestDto));
    }

    @Override
    public ResponseEntity<List<EmployeeResponseDto>> getEmployees() {
        return ResponseEntity.ok(employeeService.findAll());
    }

    @Override
    public ResponseEntity<Void> deleteEmployee(String employeeId) {
        try {
            employeeService.delete(UUID.fromString(employeeId));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @Override
    public ResponseEntity<EmployeeResponseUpdateDto> updateEmployee(String employeeId, EmployeeRequestUpdateDto dto) {
        return ResponseEntity.ok(employeeService.update(UUID.fromString(employeeId), dto));
    }
}
