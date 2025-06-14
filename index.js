const express = require ('express');

let countAbout = 0;
let countMain = 0;

const app = express();

app.get('/', (req, res) => {
    countMain++;
    res.send(`<h1>Корневая страница</h1> <p>Просмотров: ${countMain}</p><a href="/about">Ссылка на страницу /about</a>`);
});

app.get('/about', (req, res) => {
    countAbout++;
    res.send(`<h1>Страница about</h1> <p>Просмотров: ${countAbout}</p><a href="/">Ссылка на корневую страницу /</a>`);
});

app.listen(3000);



