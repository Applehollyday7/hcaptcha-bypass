import puppeteer from "puppeteer-extra";
import RecaptchaPlugin from "puppeteer-extra-plugin-recaptcha";
import bypass from  "./bypass/captchaBypasser.js"

puppeteer.use(RecaptchaPlugin({
        provider: {
            fn: bypass,
        },
    })
);

puppeteer.launch({headless: false}).then(async (browser) => {
    console.log("captcha solving")
    const page = await browser.newPage();
    await page.goto("https://2captcha.com/demo/hcaptcha")
    console.log("captcha solving")
    await page.solveRecaptchas()
})
