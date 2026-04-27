# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\db\DB.test.ts >> Connect to Postgres DB
- Location: tests\db\DB.test.ts:5:5

# Error details

```
TypeError: pgClient is not a constructor
```

# Test source

```ts
  1  | import type { Client } from 'pg';
  2  | 
  3  | let pgClient: Client;
  4  | 
  5  | export class DBActions {
  6  | 
  7  |     async connectDB(dbUsername: string, dbPassword: string, dbServerName: string, dbPort: string, dbName: string) {
  8  |         const connectionString = `postgres://${dbUsername}:${dbPassword}@${dbServerName}:${dbPort}/${dbName}`;
> 9  |         pgClient = await new pgClient(connectionString);
     |                          ^ TypeError: pgClient is not a constructor
  10 |         await pgClient.connect();
  11 |     }
  12 | 
  13 |     async query(queryString: string): Promise<void> {
  14 |         return pgClient.query(queryString);
  15 |     }
  16 | }
```