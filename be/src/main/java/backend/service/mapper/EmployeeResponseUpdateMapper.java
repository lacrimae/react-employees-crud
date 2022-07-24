package backend.service.mapper;

import backend.model.Employee;
import backend.model.EmployeeResponseUpdateDto;
import org.mapstruct.Mapper;

@Mapper
public interface EmployeeResponseUpdateMapper extends EntityMapper<Employee, EmployeeResponseUpdateDto> {
}
