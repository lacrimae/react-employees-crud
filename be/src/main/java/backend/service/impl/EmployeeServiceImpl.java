package backend.service.impl;

import java.util.List;

import backend.model.EmployeeResponseDto;
import backend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    //todo: add logging

    @Override
    public List<EmployeeResponseDto> getAllEmployees() {
        return null;
    }
}
