const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
    
    const event = req.body;

    // posts
    axios.post('http://posts-clusterip-svr:4000/events', event);
    //comments
    axios.post('http://comments-clusterip-svr:4001/events', event);
    // // query
    axios.post('http://query-clusterip-svr:4002/events', event);
    // // moderation
    axios.post('http://moderation-clusterip-svr:4003/events', event);

    res.send({ status: 'OK' });

});

app.listen(4005, () => {
    console.log('listening on port 4005');
}); 