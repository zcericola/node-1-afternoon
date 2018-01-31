const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

const port = 3000;

//run express
const app = express();

//configure app to parse json from body
app.use(bodyParser.json());
//setting the API up to serve front-end files
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.destroy);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);

})



