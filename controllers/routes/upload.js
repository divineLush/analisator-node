const scraper = require('../scraper')

exports.postUpload = async (req, res) => {
    const scrapRes = parseInt(await scraper())
    const bgColor = scrapRes <= 2 ? '#5F875F' : '#AF5F5F'
    const resStr = scrapRes <= 2 ? 'безвредный' : 'вредный'
    res.render('result',  { title: 'upload', resStr, bgColor })
}
