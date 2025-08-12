# Development Setup

This guide explains how to set up the Ghostfolio development environment on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

*   **[Node.js](https://nodejs.org/)**: A JavaScript runtime. We recommend using the version specified in the `.nvmrc` file.
*   **[Docker](https://www.docker.com/)**: A platform for running applications in containers. Docker is used to run the PostgreSQL database.

## Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/ghostfolio/ghostfolio.git
    ```

2.  **Install dependencies**:

    ```bash
    cd ghostfolio
    npm install
    ```

3.  **Set up the database**:

    Start the PostgreSQL database using Docker:

    ```bash
    docker-compose up -d
    ```

    Then, apply the database schema and seed the database with initial data:

    ```bash
    npx prisma db push
    npx prisma db seed
    ```

4.  **Run the application**:

    You can run the `api` and `client` applications in separate terminals:

    **Terminal 1: Start the API**

    ```bash
    npm run start:server
    ```

    **Terminal 2: Start the Client**

    ```bash
    npm run start:client
    ```

    The client application will be available at `http://localhost:4200`.
