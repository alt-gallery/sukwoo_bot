const http = require('http');
const axios = require('axios')
const {Builder, By, Key, until} = require('selenium-webdriver');

const _ = require('lodash')


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Alt gong-si bot');
});

let driver = new Builder().forBrowser('firefox').build();
setInterval(function getGongSi() {

    try {
        driver.get(`view-source:https://project-team.upbit.com/api/v1/disclosure?region=kr&per_page=20&timestamp=${new Date().getTime()}`, { headers : {'User-Agent' : 'Mozilla/5.0'}});
        console.log(driver.page_source)

        // await driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        // driver.quit();
    }

    // axios.get(`https://project-team.upbit.com/api/v1/disclosure?region=kr&per_page=20&timestamp=${new Date().getTime()}`, { headers : {'User-Agent' : 'Mozilla/5.0'}})
    // axios.get(`https://project-team.upbit.com/api/v1/disclosure?region=kr&per_page=10`, { headers : {'User-Agent' : 'Mozilla/5.0'}})
    //     .then(res => {
    //         console.log(res)
    //         // _.forEach(res.data.data.posts, function (val) {
    //         //     console.log(val.text)
    //         // })
    //     }).catch(err => console.log(err.response.status))

    // console.log("qwe")
}, 2000)

server.listen(8043, 'localhost', () => {
});
