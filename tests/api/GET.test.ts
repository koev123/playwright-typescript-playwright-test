import { APIActions } from '@lib/APIActions';
import { test } from '@playwright/test';

const apiActions = new APIActions();

test(`getUsers`, { tag: '@API' }, async ({ request }) => {

    const response = await request.get(`/api/users?page=2`);

    await apiActions.verifyStatusCode(response);

    const fileData = await apiActions.readValuesFromTextFile('getUsers');

    const responseBodyParams = fileData.split(`#`)[0];
    const responseBodyHeaders = fileData.split(`#`)[1];

    const contentType = response.headers()['content-type'];

    const responseBody = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();

    await apiActions.verifyResponseBody(responseBodyParams, responseBody, `Response Body`);
    await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), `Response Headers`);
});