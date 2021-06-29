
const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_KEY_1_NEWS = '78c2fbbc39c140afa466d92ed5f79b85';
const API_KEY_2_NEWS="78c2fbbc39c140afa466d92ed5f79b85"
const API_KEY_3_NEWS="2531ba8806204059af4a5e4fe053efde"
const API_KEY_WEATHER="41ad88a1f768b910e390f99a84773acb"
const API_KEY_MAPS="AIzaSyC9Mk7AvKHkzPSOffPuLg_HlhzP7wAPGEM"


router.get('/', async (req, res) => {
    const topInternationalHeadLines = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY_1_NEWS}&pageSize=1`;
    const topHeadLinesInGermany = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY_1_NEWS}&pageSize=3`;
    const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY_1_NEWS}&pageSize=6`;
    const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${API_KEY_1_NEWS}&pageSize=6`;
    const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=${API_KEY_1_NEWS}&pageSize=7`;
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
    const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
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
    const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
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
    const generalInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
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
    const scienceInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
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
    const sportsInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
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
    const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
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
