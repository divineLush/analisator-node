const puppeteer = require('puppeteer');

module.exports = async () => {
    const browser = await puppeteer.launch({
	    headless: true,
	    args: ["--disable-setuid-sandbox"],
	    'ignoreHTTPSErrors': true
    });

    const str = `Aqua, Glycerin, Octyldodecanol, Cetyl Alcohol, Octocrylene, Stearyl Alcohol, Glyceryl Stearate SE, Hydrogenated Coco-Glycerides, Creatine, 1-Methylhydantoin-2-Imide, Ubiquinone, Butyrospermum Parkii Butter, Dimethicone, Butyl, Methoxydibenzoylmethane, Acrylates/C10-30 Alkyl Acrylate Crosspolymerm Carbomerm Sodium`

    const str1 = 'propylene glycol'

    const page = await browser.newPage();
    const url = 'https://www.cosdna.com/eng/ingredients.php';
	await page.goto(url);
    await page.waitForSelector('textarea');
    await page.waitForSelector('button[type="submit"]');
    await page.type('textarea', str1);
    await page.click('button[type="submit"]');

    await page.waitForSelector('span.safety');
    const scrapRes = await page.$$eval('span.safety', links => links.map(el => parseInt(el.textContent)))
    const sum = scrapRes.reduce((a, b) => a + b, 0)
    const result = parseInt(sum / scrapRes.length)
    await browser.close()

    return result
}
