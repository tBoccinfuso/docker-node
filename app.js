const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.get('/secret', (req, res, next) => {
    res.sendFile(`${__dirname}/secret.html`);
});

app.listen(3000, () => {
    console.log(`Running on localhost:3000`)
});