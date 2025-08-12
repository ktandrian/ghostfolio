# Database Schema

This document provides an overview of the Ghostfolio database schema. The schema is defined in the `prisma/schema.prisma` file.

## Entity-Relationship Diagram (ERD)

The following diagram illustrates the relationships between the main tables in the database:

```mermaid
erDiagram
    User {
        String id PK
        String accessToken
        String authChallenge
        DateTime createdAt
        String provider
        String role
        String thirdPartyId
        DateTime updatedAt
    }

    Account {
        String id PK
        String userId PK
        Float balance
        String comment
        DateTime createdAt
        String currency
        Boolean isExcluded
        String name
        String platformId
        DateTime updatedAt
    }

    Order {
        String id PK
        String accountId
        String accountUserId
        String comment
        DateTime createdAt
        String currency
        DateTime date
        Float fee
        Boolean isDraft
        Float quantity
        String symbolProfileId
        String type
        Float unitPrice
        DateTime updatedAt
        String userId
    }

    SymbolProfile {
        String id PK
        String assetClass
        String assetSubClass
        String comment
        Json countries
        DateTime createdAt
        String currency
        String cusip
        String dataSource
        String figi
        String figiComposite
        String figiShareClass
        Json holdings
        Boolean isActive
        String isin
        String name
        DateTime updatedAt
        Json scraperConfiguration
        Json sectors
        String symbol
        Json symbolMapping
        String url
        String userId
    }

    User ||--o{ Account : has
    User ||--o{ Order : has
    User ||--o{ SymbolProfile : has
    Account ||--o{ Order : has
    SymbolProfile ||--o{ Order : has
```

## Tables

The database consists of several tables. Here are some of the most important ones:

*   **User**: Stores user information, including authentication details and preferences.
*   **Account**: Represents a user's investment account.
*   **Order**: Represents a single transaction (buy, sell, dividend, etc.).
*   **SymbolProfile**: Stores information about a specific financial instrument (stock, ETF, etc.).
*   **MarketData**: Stores historical market data for each symbol.
*   **Tag**: Represents a user-defined tag that can be assigned to orders.
*   **Platform**: Represents a brokerage or other financial platform.
