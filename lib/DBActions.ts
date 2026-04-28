import { Client } from 'pg';

let pgClient: Client;

export class DBActions {

    async connectDB(dbUsername: string, dbPassword: string, dbServerName: string, dbPort: string, dbName: string) {
        const connectionString = `postgres://${dbUsername}:${dbPassword}@${dbServerName}:${dbPort}/${dbName}`;
        pgClient = new Client({ connectionString });
        await pgClient.connect();
    }

    async query(queryString: string): Promise<import('pg').QueryResult<any>> {
        return pgClient.query(queryString);
    }
}