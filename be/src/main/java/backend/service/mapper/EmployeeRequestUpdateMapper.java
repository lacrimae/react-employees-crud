package backend.service.mapper;

import backend.model.Employee;
import backend.model.EmployeeRequestUpdateDto;
import org.mapstruct.Mapper;

@Mapper
public interface EmployeeRequestUpdateMapper extends EntityMapper<Employee, EmployeeRequestUpdateDto> {

}
