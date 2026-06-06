import { APIActions } from '@lib/APIActions';
import { testConfig } from '../../testConfig';
import { expect, test } from '@playwright/test';

const apiActions = new APIActions();
const apiBaseUrl = process.env.npm_config_ENV === 'devApi' && testConfig.devApi
    ? testConfig.devApi
    : testConfig.qaApi;

test(`postLogin`, { tag: '@API' }, async ({ request }) => {
    const requestBody = JSON.parse((await apiActions.readValuesFromTextFile('postLogin')).split(`#`)[0]);
    const response = await request.post(`${apiBaseUrl}/api/login`, { data: requestBody });
    const responseBodyParams = (await apiActions.readValuesFromTextFile('postLogin')).split(`#`)[1];

    if (response.ok()) {
        await apiActions.verifyStatusCode(response);
        await apiActions.verifyResponseBody(responseBodyParams, await response.json(), 'Response Body');
        return;
    }

    expect(response.status()).toBe(401);
    const responseBody = await response.json();
    await apiActions.verifyResponseBody('error|message', responseBody, 'Response Body');
});
