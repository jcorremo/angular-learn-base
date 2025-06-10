# Aplazo Merchant Hub Microservice

This project is a Java microservice for merchant management on the Aplazo platform. It uses Maven as the build system and is organized into client and service submodules.

1. 📂 [Project Structure](#project-structure)  
2. 🏛️ [Architecture](#architecture)  
3. 📋 [Requirements](#requirements)  
4. 🚀 [Installation and Execution](#installation-and-execution)  
5. 🔍 [Testing the Endpoints](#testing-the-endpoints)  
6. 🧪 [Unit Tests](#unit-tests)  
7. 🐳 [Deployment with Docker](#deployment-with-docker)  
8. 🔧 [Configuration](#configuration)  
9. ✉️ [Contact](#contact)  

## Project Structure

- `java.aplazo-merchant-hub-ms-client/`: Client module for communication with the microservice.
- `java.aplazo-merchant-hub-ms-service/`: Main microservice module, contains business logic and configuration.
- `jenkins/`: CI/CD configuration files.
- `Dockerfile`: Used to build the Docker image for the microservice.
- `pom.xml`: Main Maven configuration file.


## Architecture


## Requirements

- Java 17+
- Maven 3.8+
- Docker (optional, for deployment)

## Installation and Execution

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd java.aplazo-merchant-hub-ms
   ```
2. Build the project:
   ```sh
   mvn clean install
   ```
3. Run the service:
   ```sh
   cd java.aplazo-merchant-hub-ms-service
   mvn spring-boot:run
   ```

## Testing the Endpoints

To use the endpoints, you must include the following headers in your requests:

- `x-channel-product: PAYLAYTER`
- `x-channel-id: AE`
- `x-authorization: algorithm=rsasha256,keyVersion=1,method=GET,signature=<signature>,timestamp=<timestamp>`

The `signature` field in the `x-authorization` header must be generated using the following format:

```
StringJoiner stringJoiner = new StringJoiner("\n")
    .add(algorithm)
    .add(keyVersion)
    .add(method)
    .add(query == null ? "" : query)
    .add(timestamp)
    .add(body);
```

This string must be signed with the `RsaCryptoSigner` class using your private key. The resulting signature should be Base64 encoded and placed in the `signature` field.

Example header:

```
x-authorization: algorithm=rsasha256,keyVersion=1,method=GET,signature=h/erQyoIsIt2jlunlR6BI5LI2CvLwk9A0ljM4lrybyrnkLDwf0EHEg2UWrwaxEVdzlag6fu5vvdxUkLfCIry1q4o92fN8VNj+vJPIgTQ1t2qiZeL+iaXgMbT9TedkVNabvu7OtUlKkox/A2k1J8HDMtyAgttUJpqfPxFk+OV8tW0/Q70pJ6Pw/NXfFKtYoxDGSH0lmXU3Z9oRDP4hLVZE1zxtyu0v9L1iUELR430YGnQx6+tu9ympK7qZ03wasirqTTfC89yRyS2vZac43BlqjS8xt2QQHJ6E/qdy80Ax3ODGs4jA3H3GZhLZN7WaQJHya1cu72QjcgNHgkMBA0AlQ==,timestamp=1748362717743
```

## Unit Tests

To run unit tests:

```sh
mvn test
```

## Deployment with Docker

Build the Docker image:

```sh
docker build -t aplazo-merchant-hub-ms .
```

## Configuration

Configuration files are located in `java.aplazo-merchant-hub-ms-service/src/main/resources/`.

## Contact

For questions or support, contact the Aplazo development team.
