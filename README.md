# Employee management system

## Used technologies

- [React](https://reactjs.org/)
- Java 18
- Flyway
- Spring Boot

In the project fe directory, you can run:

### `npm install`
### `npm start`

## Backend starts:

execute db migration:

### `mvn flyway:migrate -Dspring.datasource.url=jdbc:postgresql://localhost:5432/${DB_NAME} -Dspring.datasource.username=${USERNAME} -Dspring.datasource.password=${PASSWORD} -Dspring.flyway.schemas=${SCHEMA}`
    


