package backend.support;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Optional;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class DateTimeUtils {
    public static LocalDateTime toLocalDateTime(Timestamp timestamp) {
        return Optional.ofNullable(timestamp)
                .map(Timestamp::toLocalDateTime)
                //todo: throw exception if timestamp is null
                .orElse(null);
    }
}
