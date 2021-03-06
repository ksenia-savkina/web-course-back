const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const eventRoute = require('./routes/events.routes.js');
const userRoute = require('./routes/users.routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
	res.json({ status: 'ok', time: new Date().toUTCString() });
});

app.use('/', eventRoute)
app.use('/', userRoute)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});