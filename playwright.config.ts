import { PlaywrightTestConfig, devices } from '@playwright/test';
import { testConfig } from './testConfig';
import { OrtoniReportConfig } from 'ortoni-report';

const ENV = process.env.npm_config_ENV || 'qa';

if (![`qa`, `dev`, `qaApi`, `devApi`].includes(ENV)) {
  console.log(`Invalid environment value provided. Defaulting to "qa".`);
}

const reportConfig: OrtoniReportConfig = {
  base64Image: true,
  title: "Playwright Framework with Typescript",
  showProject: true,
  filename: "OrtoniHtmlReport",
  authorName: "Akshay Pai",
  preferredTheme: "dark",
  folderPath: "html-report",
  projectName: "Playwright Framework with Typescript",
}

const config: PlaywrightTestConfig = {

  //Global Setup to run before all tests
  globalSetup: `./global-setup`,

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 0,

  //Reporters
  reporter: [
    [`./CustomReporterConfig.ts`],
    ['list'],
    [`allure-playwright`], 
    [`html`, { outputFolder: 'html-report', open: 'never' }],
    ['ortoni-report', reportConfig]
    
  ],

  projects: [
    
    {
      name: `Chromium`,
      use: {
        browserName: `chromium`,
        baseURL: testConfig[ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    // {
    //   name: `Firefox`,
    //   use: {
    //     browserName: `firefox`,
    //     baseURL: testConfig[ENV],
    //     headless: true,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0
    //     }
    //   },
    // },

    // {
    //   name: `Edge`,
    //   use: {
    //     browserName: `chromium`,
    //     channel: `msedge`,
    //     baseURL: testConfig[ENV],
    //     headless: false,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0
    //     }
    //   },
    // },
    // {
    //   name: `WebKit`,
    //   use: {
    //     browserName: `webkit`,
    //     baseURL: testConfig[ENV],
    //     headless: true,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0
    //     }
    //   },
    // },
    // {
    //   name: `Device`,
    //   use: {
    //     ...devices[`Pixel 4a (5G)`],
    //     browserName: `chromium`,
    //     channel: `chrome`,
    //     baseURL: testConfig[ENV],
    //     headless: true,
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0
    //     }
    //   },
    // },
    // {
    //   name: `DB`
    // },
    // {
    //   name: `API`,
    //   use: {
    //     baseURL: testConfig[ENV]
    //   }
    // }
  ],
};
export default config;