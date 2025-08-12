# Deployment

This guide explains how to build and deploy the Ghostfolio application using Docker.

## Building the Application

To build the application for production, run the following command:

```bash
npm run build:production
```

This will create a production-ready build of both the `api` and `client` applications in the `dist` directory.

## Docker Deployment

The easiest way to deploy Ghostfolio is by using the official Docker image.

### Docker Compose

The repository includes a `docker-compose.yml` file that you can use to run the application with a single command.

1.  **Create a `.env` file**:

    Copy the `.env.example` file to `.env` and customize the environment variables as needed.

2.  **Start the application**:

    ```bash
    docker-compose up -d
    ```

    This will start the Ghostfolio application, along with a PostgreSQL database. The application will be available at `http://localhost:3333`.

### Manual Docker Deployment

If you prefer to manage the Docker containers manually, you can use the following commands:

1.  **Build the Docker image**:

    ```bash
    docker build -t ghostfolio .
    ```

2.  **Run the Docker container**:

    ```bash
    docker run -d -p 3333:3333 --name ghostfolio ghostfolio
    ```

    This will start the Ghostfolio application in a Docker container. You will also need to provide a PostgreSQL database and configure the necessary environment variables.
