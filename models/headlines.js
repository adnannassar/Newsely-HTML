
const axios = require("axios");

const topInternationalHeadLines = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=1';

async function getNews() {
    try {
        const response = await axios.get(topInternationalHeadLines);
        return response;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getNews();
