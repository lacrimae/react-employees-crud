package backend.service.mapper;

import backend.model.Employee;
import backend.model.EmployeeResponseDto;
import org.mapstruct.Mapper;

@Mapper
public interface EmployeeResponseMapper extends EntityMapper<Employee, EmployeeResponseDto> {

}
