# Database Migrations

This document explains how to manage database migrations in the Ghostfolio project using Prisma.

## Overview

Prisma Migrate is a database schema migration tool that helps you to keep your database schema in sync with your Prisma schema. It is based on a declarative approach, where you define the desired state of your schema in the `prisma/schema.prisma` file, and Prisma Migrate takes care of generating and applying the necessary SQL migrations.

## Workflow

The basic workflow for creating and applying migrations is as follows:

1.  **Modify the Prisma schema**: Make changes to your `prisma/schema.prisma` file to reflect the desired changes in your database schema.
2.  **Generate a new migration**: Run the following command to generate a new SQL migration file:

    ```bash
    npx prisma migrate dev --name <migration-name>
    ```

    Replace `<migration-name>` with a descriptive name for your migration (e.g., `add-user-role`).

3.  **Apply the migration**: Prisma will automatically apply the generated migration to your development database. To apply migrations to a production database, you can use the following command:

    ```bash
    npx prisma migrate deploy
    ```

## Pushing the Schema

For simple changes that do not require a migration file (e.g., during prototyping), you can use the `db push` command to sync your schema with the database:

```bash
npx prisma db push
```

This command will directly apply the changes to the database without creating a migration file. However, it is generally recommended to use migrations for production environments.
