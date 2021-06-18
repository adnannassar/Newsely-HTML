
const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_KEY_1_NEWS = '78c2fbbc39c140afa466d92ed5f79b85';
const API_KEY_2_NEWS="78c2fbbc39c140afa466d92ed5f79b85"
const API_KEY_3_NEWS="2531ba8806204059af4a5e4fe053efde"
const API_KEY_WEATHER="41ad88a1f768b910e390f99a84773acb"
const API_KEY_MAPS="AIzaSyC9Mk7AvKHkzPSOffPuLg_HlhzP7wAPGEM"
const topInternationalHeadLines = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY_1_NEWS}&pageSize=1`;
const topHeadLinesInGermany = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY_1_NEWS}&pageSize=3`;
const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY_1_NEWS}&pageSize=6`;
const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${API_KEY_1_NEWS}&pageSize=6`;
const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=${API_KEY_1_NEWS}&pageSize=7`;

router.get('/', async (req, res) => {
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

const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=${API_KEY_1_NEWS}&pageSize=12`;
router.get("/unterhaltung", async (req, res) => {
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

router.get("/gesundheit", function (req, res) {
    res.render("gesundheit");
});

router.get("/allgemeines", function (req, res) {
    res.render("allgemeines");
});

router.get("/wissenschaft", function (req, res) {
    res.render("wissenschaft");
});

router.get("/sport", function (req, res) {
    res.render("sport");
});

router.get("/technologie", function (req, res) {
    res.render("technologie");
});


module.exports = router;
