# Todo Endpoints

This document provides an overview of the Mock Service Worker (MSW) endpoints used in the example Next.js application.

## Overview

The application uses MSW to mock API endpoints for managing a todo list. These endpoints simulate API interactions for retrieving, creating, updating, and deleting todo items.

## Todo

Represents a todo item with specific properties.

- **id** (string): Unique identifier for the todo item.
- **text** (string): The text content of the todo item.
- **isCompleted** (boolean): Indicates whether the todo item is marked as completed or not.
- **createdOn** (string): The timestamp when the todo item was created in ISO 8601 format.
- **modifiedOn** (string | null): The timestamp when the todo item was last modified, or null if it hasn't been modified.

Example:

```typescript
type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  createdOn: string;
  modifiedOn: string | null;
};
```

## Endpoints

### 1. GET /api/todo

- **Description:** Retrieve the list of todo items.

- **Response:**
  - **Status Code:** 200 OK
  - **Body:** An array of todo items along with a total count in JSON format.

### 2. POST /api/todo

- **Description:** Create a new todo item.

- **Request Body:**

  - `text` (string): The text content of the new todo item.

- **Response:**

  - **Status Code:** 200 OK
  - **Body:** The newly created todo item in JSON format.

- **Error Response (Validation):**
  - **Status Code:** 400 Bad Request
  - **Body:** An error message if the text is missing or invalid.

### 3. DELETE /api/todo/:id

- **Description:** Delete a todo item by its ID.

- **Parameters:**

  - `id` (string): The ID of the todo item to delete.

- **Response:**

  - **Status Code:** 200 OK
  - **Body:** A success message indicating the deletion.

- **Error Response (Validation):**

  - **Status Code:** 400 Bad Request
  - **Body:** An error message if the ID is missing or invalid.

- **Error Response (Not Found):**
  - **Status Code:** 404 Not Found
  - **Body:** An error message if the specified todo item is not found.

### 4. PUT /api/todo/:id

- **Description:** Update a todo item by its ID.

- **Parameters:**

  - `id` (string): The ID of the todo item to update.

- **Request Body:**

  - `text` (string): The updated text content of the todo item.
  - `isCompleted` (boolean): The updated completion status of the todo item.

- **Response:**

  - **Status Code:** 200 OK
  - **Body:** The updated todo item.

- **Error Response (Validation):**

  - **Status Code:** 400 Bad Request
  - **Body:** An error message if the request body is missing or invalid.

- **Error Response (Not Found):**
  - **Status Code:** 404 Not Found
  - **Body:** An error message if the specified todo item is not found.

## Usage

These MSW endpoints are used to simulate API interactions within the application. They allow you to test how the application handles various HTTP requests and responses related to managing a todo list.

Feel free to refer to the MSW documentation for more details on how to configure and use mock endpoints in your Next.js application.
