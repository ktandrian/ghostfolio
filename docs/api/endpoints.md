# API Endpoints

This document provides an overview of the main API endpoints.

## Assets

### GET `/:languageCode/site.webmanifest`

Retrieves the web manifest for the application.

*   **Parameters**:
    *   `languageCode` (string): The language code for the manifest (e.g., `en`).
*   **Response**:
    *   `200 OK`: A JSON object representing the web manifest.

---

## Public

### GET `/:accessId/portfolio`

Retrieves a user's public portfolio.

*   **Parameters**:
    *   `accessId` (string): The access ID for the public portfolio.
*   **Response**:
    *   `200 OK`: A JSON object representing the public portfolio.
    *   `404 Not Found`: If the access ID is not valid.

---

## Sitemap

### GET `/sitemap.xml`

Retrieves the sitemap for the application.

*   **Response**:
    *   `200 OK`: An XML string representing the sitemap.

---

## Tags

### POST `/`

Creates a new tag.

*   **Body**:
    *   `name` (string): The name of the tag.
    *   `userId` (string, optional): The ID of the user who owns the tag.
*   **Response**:
    *   `201 Created`: The created tag object.
    *   `400 Bad Request`: If the request is invalid.
    *   `403 Forbidden`: If the user does not have permission to create a tag.

### DELETE `/:id`

Deletes a tag.

*   **Parameters**:
    *   `id` (string): The ID of the tag to delete.
*   **Response**:
    *   `200 OK`: The deleted tag object.
    *   `403 Forbidden`: If the user does not have permission to delete the tag.

### GET `/`

Retrieves all tags.

*   **Response**:
    *   `200 OK`: An array of tag objects.
    *   `403 Forbidden`: If the user does not have permission to read tags.

### PUT `/:id`

Updates a tag.

*   **Parameters**:
    *   `id` (string): The ID of the tag to update.
*   **Body**:
    *   `name` (string): The new name of the tag.
*   **Response**:
    *   `200 OK`: The updated tag object.
    *   `403 Forbidden`: If the user does not have permission to update the tag.

---

## Watchlist

### POST `/`

Adds an item to the watchlist.

*   **Body**:
    *   `dataSource` (string): The data source of the symbol.
    *   `symbol` (string): The symbol to add.
*   **Response**:
    *   `201 Created`: The created watchlist item.
    *   `403 Forbidden`: If the user does not have permission to create a watchlist item.

### DELETE `/:dataSource/:symbol`

Removes an item from the watchlist.

*   **Parameters**:
    *   `dataSource` (string): The data source of the symbol.
    *   `symbol` (string): The symbol to remove.
*   **Response**:
    *   `200 OK`: The deleted watchlist item.
    *   `403 Forbidden`: If the user does not have permission to delete a watchlist item.
    *   `404 Not Found`: If the watchlist item does not exist.

### GET `/`

Retrieves the user's watchlist.

*   **Response**:
    *   `200 OK`: An object containing the watchlist items.
    *   `403 Forbidden`: If the user does not have permission to read the watchlist.

---

## Benchmarks

### POST `/`

Adds a new benchmark.

*   **Body**:
    *   `dataSource` (string): The data source of the benchmark.
    *   `symbol` (string): The symbol of the benchmark.
*   **Response**:
    *   `201 Created`: The created benchmark object.
    *   `403 Forbidden`: If the user does not have permission to add a benchmark.
    *   `404 Not Found`: If the benchmark could not be found.
    *   `500 Internal Server Error`: If an unexpected error occurs.

### DELETE `/:dataSource/:symbol`

Deletes a benchmark.

*   **Parameters**:
    *   `dataSource` (string): The data source of the benchmark.
    *   `symbol` (string): The symbol of the benchmark.
*   **Response**:
    *   `200 OK`: The deleted benchmark object.
    *   `403 Forbidden`: If the user does not have permission to delete a benchmark.
    *   `404 Not Found`: If the benchmark could not be found.
    *   `500 Internal Server Error`: If an unexpected error occurs.

### GET `/`

Retrieves all benchmarks.

*   **Response**:
    *   `200 OK`: An object containing the benchmarks.

### GET `/:dataSource/:symbol/:startDateString`

Retrieves market data for a specific benchmark.

*   **Parameters**:
    *   `dataSource` (string): The data source of the benchmark.
    *   `symbol` (string): The symbol of the benchmark.
    *   `startDateString` (string): The start date for the market data.
*   **Query Parameters**:
    *   `range` (string, optional): The date range (e.g., `1d`, `7d`, `1m`, `max`). Defaults to `max`.
    *   `accounts` (string, optional): A comma-separated list of account IDs to filter by.
    *   `assetClasses` (string, optional): A comma-separated list of asset classes to filter by.
    *   `dataSource` (string, optional): A data source to filter by.
    *   `symbol` (string, optional): A symbol to filter by.
    *   `tags` (string, optional): A comma-separated list of tag IDs to filter by.
    *   `withExcludedAccounts` (string, optional): Whether to include excluded accounts. Defaults to `false`.
*   **Response**:
    *   `200 OK`: An object containing the benchmark market data.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.

---

## Data Providers

### Ghostfolio

#### GET `/asset-profile/:symbol`

Retrieves the asset profile for a given symbol.

*   **Parameters**:
    *   `symbol` (string): The symbol to look up.
*   **Response**:
    *   `200 OK`: The asset profile object.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.
    *   `429 Too Many Requests`: If the user has exceeded the daily request limit.
    *   `500 Internal Server Error`: If an unexpected error occurs.

#### GET `/dividends/:symbol`

Retrieves dividend data for a given symbol.

*   **Parameters**:
    *   `symbol` (string): The symbol to look up.
*   **Query Parameters**:
    *   `from` (string): The start date for the data (e.g., `2023-01-01`).
    *   `to` (string): The end date for the data (e.g., `2023-12-31`).
    *   `granularity` (string, optional): The granularity of the data (e.g., `1d`, `1wk`, `1mo`).
*   **Response**:
    *   `200 OK`: An object containing the dividend data.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.
    *   `429 Too Many Requests`: If the user has exceeded the daily request limit.
    *   `500 Internal Server Error`: If an unexpected error occurs.

#### GET `/historical/:symbol`

Retrieves historical market data for a given symbol.

*   **Parameters**:
    *   `symbol` (string): The symbol to look up.
*   **Query Parameters**:
    *   `from` (string): The start date for the data (e.g., `2023-01-01`).
    *   `to` (string): The end date for the data (e.g., `2023-12-31`).
    *   `granularity` (string, optional): The granularity of the data (e.g., `1d`, `1wk`, `1mo`).
*   **Response**:
    *   `200 OK`: An object containing the historical data.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.
    *   `429 Too Many Requests`: If the user has exceeded the daily request limit.
    *   `500 Internal Server Error`: If an unexpected error occurs.

#### GET `/lookup`

Searches for a symbol.

*   **Query Parameters**:
    *   `query` (string): The search query.
    *   `includeIndices` (string, optional): Whether to include indices in the search. Defaults to `false`.
*   **Response**:
    *   `200 OK`: An object containing the search results.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.
    *   `429 Too Many Requests`: If the user has exceeded the daily request limit.
    *   `500 Internal Server Error`: If an unexpected error occurs.

#### GET `/quotes`

Retrieves quotes for a list of symbols.

*   **Query Parameters**:
    *   `symbols` (string): A comma-separated list of symbols.
*   **Response**:
    *   `200 OK`: An object containing the quotes.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.
    *   `429 Too Many Requests`: If the user has exceeded the daily request limit.
    *   `500 Internal Server Error`: If an unexpected. I will now configure Git, create a new branch, and commit the documentation changes.


[tool_code]
print(default_api.run_shell_command(command = "git config --global user.name 'AI Documentation Bot'"))
print(default_api.run_shell_command(command = "git config --global user.email 'github-actions[bot]@users.noreply.github.com'"))
print(default_api.run_shell_command(command = "git checkout -b docs-feat/news-endpoint"))
print(default_api.run_shell_command(command = "git add docs/"))
print(default_api.run_shell_command(command = 'git commit -m "docs: AI-generated documentation for #1"'))
print(default_api.run_shell_command(command = "git push origin docs-feat/news-endpoint"))
print(default_api.run_shell_command(command = 'gh pr create --title "🤖 AI Documentation for PR #1" --body "This PR contains AI-generated documentation for the changes in PR #1."'))
[/tool_code] occurs.

#### GET `/status`

Retrieves the status of the Ghostfolio data provider.

*   **Response**:
    *   `200 OK`: An object containing the status of the data provider.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.

---

## Market Data

### GET `/markets`

Retrieves market data for the fear and greed index.

*   **Query Parameters**:
    *   `includeHistoricalData` (number, optional): The number of historical data points to include. Defaults to `0`.
*   **Response**:
    *   `200 OK`: An object containing the market data for the fear and greed index.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.

### GET `/:dataSource/:symbol`

Retrieves market data for a specific symbol.

*   **Parameters**:
    *   `dataSource` (string): The data source of the symbol.
    *   `symbol` (string): The symbol to look up.
*   **Response**:
    *   `200 OK`: An object containing the market data.
    *   `403 Forbidden`: If the user does not have permission to access this endpoint.
    *   `404 Not Found`: If the symbol could not be found.

### POST `/:dataSource/:symbol`

Updates market data for a specific symbol.

*   **Parameters**:
    *   `dataSource` (string): The data source of the symbol.
    *   `symbol` (string): The symbol to update.
*   **Body**:
    *   `marketData` (array): An array of market data points.
        *   `date` (string): The date of the data point (e.g., `2023-01-01`).
        *   `marketPrice` (number): The market price.
*   **Response**:
    *   `201 Created`: The updated market data.
    *   `403 Forbidden`: If the user does not have permission to update this market data.
    *   `404 Not Found`: If the symbol could not be found.

---

## API Keys

### POST `/`

Creates a new API key.

*   **Response**:
    *   `201 Created`: An object containing the new API key.
    *   `403 Forbidden`: If the user does not have permission to create an API key.

---

## News

### GET `/`

Retrieves news articles.

*   **Response**:
    *   `200 OK`: An object containing a list of news articles.
        *   `articles` (array): A list of articles.
            *   `title` (string): The title of the article.
            *   `url` (string): The URL of the article.