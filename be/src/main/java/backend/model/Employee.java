package backend.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

import backend.repository.tables.records.EmployeeRecord;
import static backend.support.DateTimeUtils.toLocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Employee {
    private UUID id;
    private String name;
    private BigDecimal salary;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static Employee of(EmployeeRecord record) {
        return Employee.builder()
                .id(record.getId())
                .name(record.getName())
                .salary(record.getSalary())
                .createdAt(toLocalDateTime(record.getCreatedAt()))
                .updatedAt(toLocalDateTime(record.getUpdatedAt()))
                .build();
    }
}
