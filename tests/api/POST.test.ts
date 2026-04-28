import { APIActions } from '@lib/APIActions';
import { testConfig } from '../../testConfig';
import { test } from '@playwright/test';

const apiActions = new APIActions();
const apiBaseUrl = process.env.npm_config_ENV === 'devApi' && testConfig.devApi
    ? testConfig.devApi
    : testConfig.qaApi;
const reqresApiKey = process.env.REQRES_API_KEY;

test(`postUsers`, { tag: '@API'}, async ({ request }) => {
    test.skip(!reqresApiKey, 'Set REQRES_API_KEY to run ReqRes API tests.');

    //* Body Response Params and Body Response Headers are stored in single text file separated by #
    const requestBody = JSON.parse((await apiActions.readValuesFromTextFile('postUsers')).split(`#`)[0]);
    const response = await request.post(`${apiBaseUrl}/api/users`, {
        data: requestBody,
        headers: {
            'x-api-key': reqresApiKey!,
        },
    });
    await apiActions.verifyStatusCode(response);

    const responseBodyParams = (await apiActions.readValuesFromTextFile(`postUsers`)).split(`#`)[1];
    await apiActions.verifyResponseBody(responseBodyParams, await response.json(), `Response Body`);

    const responseBodyHeaders = (await apiActions.readValuesFromTextFile(`postUsers`)).split(`#`)[2];
    await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), `Response Headers`);
});

