# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\GET.test.ts >> getUsers
- Location: tests\api\GET.test.ts:6:5

# Error details

```
Error: Parameter, page was not present in Response Body

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | import fs from 'fs';
  2  | import { APIResponse, expect } from '@playwright/test';
  3  | 
  4  | export class APIActions {
  5  | 
  6  |     async verifyStatusCode(response: APIResponse): Promise<void> {
  7  |         await expect(response, `200 Status code was not displayed.`).toBeOK();
  8  |     }
  9  | 
  10 |     async verifyResponseBody(expectedResponseBodyParams: string, responsePart: JSON, responseType: string): Promise<void> {
  11 |         let status = true;
  12 |         let fieldNames = `Parameter`;
  13 |         const headers = expectedResponseBodyParams.split("|");
  14 |         const responseToString = JSON.stringify(responsePart).trim();
  15 |         for (let headerKey of headers) {
  16 |             if (!(responseToString.includes(headerKey.trim()))) {
  17 |                 status = false;
  18 |                 fieldNames = fieldNames + `, ` + headerKey;
  19 |                 break;
  20 |             }
  21 |         }
> 22 |         expect(status, `${fieldNames} was not present in ${responseType}`).toBe(true);
     |                                                                            ^ Error: Parameter, page was not present in Response Body
  23 |     }
  24 | 
  25 |     async verifyResponseHeader(expectedResponseHeaderParams: string, responsePart: Array<{ name: string, value: string }>, responseType: string): Promise<void> {
  26 |         let status = true;
  27 |         let fieldNames = `Parameter`;
  28 |         for (let responseKey of responsePart) {
  29 |             if (!(expectedResponseHeaderParams.includes(responseKey.name.trim()))) {
  30 |                 status = false;
  31 |                 fieldNames = fieldNames + ' ,' + responseKey.name;
  32 |                 break;
  33 |             }
  34 |         }
  35 |         expect(status, `${fieldNames} was not present in ${responseType}`).toBe(true);
  36 |     }
  37 | 
  38 |     async readValuesFromTextFile(fileName: string): Promise<string> {
  39 |         return fs.readFileSync(`./utils/api/${fileName}.txt`, `utf8`);
  40 |     }
  41 | }
```