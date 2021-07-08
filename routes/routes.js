const express = require("express");
const router = express.Router();
const axios = require("axios");

function getAPIKey(keyNumber) {
    const API_KEY_1_NEWS = '78c2fbbc39c140afa466d92ed5f79b85';
    const API_KEY_2_NEWS = "78c2fbbc39c140afa466d92ed5f79b85"
    const API_KEY_3_NEWS = "2531ba8806204059af4a5e4fe053efde"
    const API_KEY_4_NEWS = "5952cbd45a9a4d14bac6d5a01c388f12"

    switch (keyNumber) {
        case 1:
            return API_KEY_1_NEWS;
            break;
        case 2:
            return API_KEY_2_NEWS;
            break;
        case 3:
            return API_KEY_3_NEWS;
            break;
        case 4:
            return API_KEY_4_NEWS;
            break;
    }
}

const apiKeyNumber = 3;

router.get('/', async (req, res) => {
    const topInternationalHeadLines = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=1`;
    const topHeadLinesInGermany = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=3`;
    const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=6`;
    const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=6`;
    const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=7`;
    try {
        const internationalHeadlines = await axios.get(topInternationalHeadLines);
        const germanyHeadlines = await axios.get(topHeadLinesInGermany);
        const businessNewsGermany = await axios.get(businessInGermany);
        const technologyNewsGermany = await axios.get(technologyInGermany);
        const healthNewsGermany = await axios.get(healthInGermany);
        res.render('index', {
            internationalHeadlinesArtikels: internationalHeadlines.data.articles,
            germanyHeadlinesArtikels: germanyHeadlines.data.articles,
            businessNewsGermanyArtikels: businessNewsGermany.data.articles,
            technologyNewsGermanyArtikels: technologyNewsGermany.data.articles,
            healthNewsGermanyArtikels: healthNewsGermany.data.articles
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }

    }
});

router.get("/unterhaltung", async (req, res) => {
    const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=12`;
    try {
        const entertainmentNewsGermany = await axios.get(entertainmentInGermany);
        res.render('unterhaltung', {
            entertainmentNewsGermanyArtikels: entertainmentNewsGermany.data.articles
        });
    } catch (error) {

        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }
    }
});

router.get("/gesundheit", async function (req, res) {
    const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=
    health&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=12`;
    try {
        const healthNewsGermany = await axios.get(healthInGermany);
        res.render('gesundheit', {
            healthNewsGermanyArtikels: healthNewsGermany.data.articles
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }
    }

});

router.get("/allgemeines", async function (req, res) {
    const generalInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=12`;
    try {
        const generalNewsGermany = await axios.get(generalInGermany);
        res.render('allgemeines', {
            generalNewsGermanyArtikels: generalNewsGermany.data.articles
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }
    }

});

router.get("/wissenschaft", async function (req, res) {
    const scienceInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=12`;
    try {
        const scienceNewsGermany = await axios.get(scienceInGermany);
        res.render('wissenschaft', {
            scienceNewsGermanyArtikels: scienceNewsGermany.data.articles
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }
    }

});

router.get("/sport", async function (req, res) {
    const sportsInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=12`;
    try {
        const sportsNewsGermany = await axios.get(sportsInGermany);
        res.render('sport', {
            sportsNewsGermanyArtikels: sportsNewsGermany.data.articles
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }
    }

});

router.get("/technologie", async function (req, res) {
    const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${getAPIKey(apiKeyNumber)}&pageSize=12`;
    try {
        const technologyNewsGermany = await axios.get(technologyInGermany);
        res.render('technologie', {
            technologyGermanyArtikels: technologyNewsGermany.data.articles
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('ERROR', error.message);
        }
    }

});

router.get("/about", function (req, res) {
    res.render("about");
});
router.use(function (req, res) {
    res.render('404');
});

module.exports = router;
