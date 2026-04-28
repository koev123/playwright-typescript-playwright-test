import { APIActions } from '@lib/APIActions';
import { testConfig } from '../../testConfig';
import { test } from '@playwright/test';

const apiActions = new APIActions();
const apiBaseUrl = process.env.npm_config_ENV === 'devApi' && testConfig.devApi
  ? testConfig.devApi
  : testConfig.qaApi;
const reqresApiKey = process.env.REQRES_API_KEY;

test('getUsers', { tag: '@API' }, async ({ request }) => {
  test.skip(!reqresApiKey, 'Set REQRES_API_KEY to run ReqRes API tests.');

  const response = await request.get(`${apiBaseUrl}/api/users?page=2`, {
    headers: {
      'x-api-key': reqresApiKey!,
    },
  });

  await apiActions.verifyStatusCode(response);

  const fileData = await apiActions.readValuesFromTextFile('getUsers');
  const [responseBodyParams, responseBodyHeaders] = fileData.split('#');

  const contentType = response.headers()['content-type'];
  const responseBody = contentType?.includes('application/json')
    ? await response.json()
    : await response.text();

  await apiActions.verifyResponseBody(responseBodyParams, responseBody, 'Response Body');
  await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), 'Response Headers');
});
