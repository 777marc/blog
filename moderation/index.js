const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/events', (req, res) => {
    res.send(posts);
});

app.listen(4003, () => {
    console.log('listening 4003');
});