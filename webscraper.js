const puppeteer = require('puppeteer');

async function scrapeData() {
    const url = "https://stackoverflow.com/jobs";

    // dont show browser
    const browser = await puppeteer.launch();

    // show browser
    // const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    const data = await page.evaluate(() => {
        const jobTitle = document.querySelector(".stretched-link").innerText;
        return { jobTitle };
    });

    console.log("Data:", data);
    await browser.close();
}

scrapeData();