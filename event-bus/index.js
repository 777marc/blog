const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
    
    const event = req.body;

    console.log('event:', event);

    // posts
    axios.post('http://posts-clusterip-svr:4000/events', event);
    //comments
    axios.post('http://localhost:4001/events', event);
    // // query
    // axios.post('http://localhost:4002/events', event);
    // // moderation
    // axios.post('http://localhost:4003/events', event);

    res.send({ status: 'OK' });

});

app.listen(4005, () => {
    console.log('listening on port 4005');
}); 