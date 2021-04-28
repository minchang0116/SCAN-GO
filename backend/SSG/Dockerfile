FROM openjdk:8-jdk-alpine AS builder
COPY mvnw .
COPY mvnw.cmd .
COPY pom.xml .
COPY src src
RUN mvn clean package

FROM openjdk:8-jdk-alpine
COPY --from=builder target/*.jar app.jar
ENV JAVA_OPTS=""

EXPOSE 9000
ENTRYPOINT ["java", "-jar", "/app.jar"]
