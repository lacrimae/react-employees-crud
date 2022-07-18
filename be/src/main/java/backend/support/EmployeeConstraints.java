package backend.support;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EmployeeConstraints {
    public static final String BASE_ENDPOINT_MAPPING =  "${openapi.lsbs.base-path:/api/v1}";
}
