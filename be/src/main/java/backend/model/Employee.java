package backend.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

import backend.repository.tables.records.EmployeeRecord;
import static backend.support.DateTimeUtils.toLocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Employee {
    private UUID id;
    private String name;
    private BigDecimal salary;
    private Boolean isPromoted;
    private Boolean isStarred;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static Employee of(EmployeeRecord record) {
        return Employee.builder()
                .id(record.getId())
                .name(record.getName())
                .salary(record.getSalary())
                .isPromoted(record.getIsPromoted())
                .isStarred(record.getIsStarred())
                .createdAt(toLocalDateTime(record.getCreatedAt()))
                .updatedAt(toLocalDateTime(record.getUpdatedAt()))
                .build();
    }
}
