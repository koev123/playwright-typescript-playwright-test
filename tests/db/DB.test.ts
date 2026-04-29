import { testConfig } from '../../testConfig';
import { DBActions } from '@lib/DBActions';
import { test } from '@playwright/test'

test('Connect to Postgres DB', async () => {
    test.skip(
        !testConfig.dbUsername || !testConfig.dbPassword || !testConfig.dbServerName || !testConfig.dbPort || !testConfig.dbName,
        'Database connection settings are not configured in testConfig.ts.'
    );

    const dbConnection = new DBActions();
    await dbConnection.connectDB(testConfig.dbUsername, testConfig.dbPassword, testConfig.dbServerName,
        testConfig.dbPort, testConfig.dbName);
    await dbConnection.query(`SELECT * FROM TABLE`);
});
