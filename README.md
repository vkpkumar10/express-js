# Express API

A small Express.js API demonstrating basic routes for users and products.

## Requirements

- Node.js 18 or newer
- npm

## Installation

```bash
npm install
```

## Running the server

Start the server normally:

```bash
npm start
```

Start the server in development mode with automatic restarts:

```bash
npm run start:dev
```

The server listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

PowerShell example:

```powershell
$env:PORT=4000; npm start
```

## API endpoints

### `GET /`

Returns a plain-text greeting:

```text
Hello World!
```

### `GET /api/users`

Returns the list of mock users:

```json
[
  { "id": 1, "username": "Alex", "displayname": "Alex" },
  { "id": 2, "username": "Anoop", "displayname": "Anoop" }
]
```

### `GET /api/users/:id`

Returns one user by numeric ID. For example:

```text
GET /api/users/1
```

If the ID does not exist, the API returns `404` with:

```json
{ "message": "User not found" }
```

### `GET /api/products`

Returns the current mock product list:

```json
[
  { "id": 1, "productname": "Copper", "Price": 10.99 },
  { "id": 2, "productname": "Silver", "Price": 20.99 }
]
```

## Project structure

```text
.
├── package.json
├── README.md
└── src/
    └── index.mjs
```

## Testing

No automated tests are configured yet. The `npm test` command currently exits with a placeholder error.
