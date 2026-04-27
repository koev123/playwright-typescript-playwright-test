# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functional\Elements.test.ts >> Verify Elements Page
- Location: tests\functional\Elements.test.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Elements', { exact: true })

```

# Test source

```ts
  1  | import fs from 'fs';
  2  | import * as CryptoJS from 'crypto-js';
  3  | import type { Page } from '@playwright/test';
  4  | import { BrowserContext, expect } from '@playwright/test';
  5  | import { Workbook } from 'exceljs';
  6  | import { testConfig } from '../testConfig';
  7  | import * as pdfjslib from 'pdfjs-dist-es5';
  8  | 
  9  | export class WebActions {
  10 |     readonly page: Page;
  11 |     readonly context: BrowserContext;
  12 | 
  13 |     constructor(page: Page, context: BrowserContext) {
  14 |         this.page = page;
  15 |         this.context = context;
  16 |     }
  17 | 
  18 |     async decipherPassword(): Promise<string> {
  19 |         const key = `SECRET`;
  20 |         //ENCRYPT
  21 |         // const cipher = CryptoJS.AES.encrypt('Demouat@09',key);
  22 |         // console.log(cipher.toString());
  23 |         return CryptoJS.AES.decrypt(testConfig.password, key).toString(CryptoJS.enc.Utf8);
  24 |     }
  25 | 
  26 |     async delay(time: number): Promise<void> {
  27 |         return new Promise(function (resolve) {
  28 |             setTimeout(resolve, time);
  29 |         });
  30 |     }
  31 | 
  32 |     async clickByText(text: string): Promise<void> {
> 33 |         await this.page.getByText(text, { exact: true }).click();  //Matches locator with exact text and clicks
     |                                                          ^ Error: locator.click: Target page, context or browser has been closed
  34 |     }
  35 | 
  36 |     async clickElementJS(locator: string): Promise<void> {
  37 |         await this.page.$eval(locator, (element: HTMLElement) => element.click());
  38 |     }
  39 | 
  40 |     async readDataFromExcel(fileName: string, sheetName: string, rowNum: number, cellNum: number): Promise<string> {
  41 |         const workbook = new Workbook();
  42 |         return workbook.xlsx.readFile(`./Downloads/${fileName}`).then(function () {
  43 |             const sheet = workbook.getWorksheet(sheetName);
  44 |             return sheet.getRow(rowNum).getCell(cellNum).toString();
  45 |         });
  46 |     }
  47 | 
  48 |     async readValuesFromTextFile(filePath: string): Promise<string> {
  49 |         return fs.readFileSync(`${filePath}`, `utf-8`);
  50 |     }
  51 | 
  52 |     async writeDataIntoTextFile(filePath: number | fs.PathLike, data: string | NodeJS.ArrayBufferView): Promise<void> {
  53 |         fs.writeFile(filePath, data, (error) => {
  54 |             if (error)
  55 |                 throw error;
  56 |         });
  57 |     }
  58 | 
  59 |     async getPdfPageText(pdf: any, pageNo: number) {
  60 |         const page = await pdf.getPage(pageNo);
  61 |         const tokenizedText = await page.getTextContent();
  62 |         const pageText = tokenizedText.items.map((token: any) => token.str).join('');
  63 |         return pageText;
  64 |     }
  65 | 
  66 |     async getPDFText(filePath: any): Promise<string> {
  67 |         const dataBuffer = fs.readFileSync(filePath);
  68 |         const pdf = await pdfjslib.getDocument(dataBuffer).promise;
  69 |         const maxPages = pdf.numPages;
  70 |         const pageTextPromises = [];
  71 |         for (let pageNo = 1; pageNo <= maxPages; pageNo += 1) {
  72 |           pageTextPromises.push(this.getPdfPageText(pdf, pageNo));
  73 |         }
  74 |         const pageTexts = await Promise.all(pageTextPromises);
  75 |         return pageTexts.join(' ');
  76 |       }
  77 | }
```