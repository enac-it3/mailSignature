const puppeteer = require('puppeteer');
let scriper = '271761';

(async () => {
    const browser = await puppeteer.launch();
    userAgent = await browser.userAgent();
    const page = await browser.newPage();
    
    await page.goto('https://people.epfl.ch/' + scriper);
    // debug of the poor
    await page.screenshot({ path: 'example.png' });
    await browser.close();
})();