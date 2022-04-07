const puppeteer = require('puppeteer');
let browser;
let page;
jest.setTimeout(30000);

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });
    page = await browser.newPage();
	await page.setDefaultNavigationTimeout(10000);
    await page.goto('https://google.com')
});
afterEach(() => {
    browser.close();
});

describe('home test', () => {
    it('test', (done) => {
        done()
    })
})