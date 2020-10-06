const puppeteer = require('puppeteer')

async function scrapePage(url,xpath){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(url);

    const [r1]= await page.$x(xpath);
    const txt = await r1.getProperty("textContent");
    const srcStr = await txt.jsonValue();

    return srcStr;
}

const url = "";
const xpath = "";


scrapePage(url,xpath)