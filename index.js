const express = require ('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const pathToFileMain = path.join(__dirname, 'countMain.json');
    const countMainData = JSON.parse(fs.readFileSync(pathToFileMain, 'utf-8'));

    countMainData.count = countMainData.count + 1;

    fs.writeFileSync(pathToFileMain, JSON.stringify(countMainData, null, 2));
    res.send(`<h1>Корневая страница</h1> <p>Просмотров: ${countMainData.count}</p><a href="/about">Ссылка на страницу /about</a>`);
});

app.get('/about', (req, res) => {
    const pathToFileAbout = path.join(__dirname, 'countAbout.json');
    const countAboutData = JSON.parse(fs.readFileSync(pathToFileAbout, 'utf-8'));

    countAboutData.count = countAboutData.count + 1;

    fs.writeFileSync(pathToFileAbout, JSON.stringify(countAboutData, null, 2));
    res.send(`<h1>Страница about</h1> <p>Просмотров: ${countAboutData.count}</p><a href="/">Ссылка на корневую страницу /</a>`);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});



