package backend.service.mapper;

import java.math.BigDecimal;
import java.util.UUID;

import backend.model.Employee;
import backend.model.EmployeeRequestDto;
import org.mapstruct.Mapper;

@Mapper
public interface EmployeeRequestMapper extends EntityMapper<Employee, EmployeeRequestDto> {

    @Override
    default Employee toEntity(EmployeeRequestDto dto) {
        if (dto == null) {
            return null;
        }

        return Employee.builder()
                .id(UUID.randomUUID())
                .name(dto.getName())
                .salary(new BigDecimal(dto.getSalary()))
                .build();
    }
}
