const express = require('express')
const app = express()
const port = 3000
const winston = require('winston');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req, res, next) => {
    logger.info(new Date().toUTCString() + "  " + req.ip + "  " + req.method + "  " + req.url + "  " + res.statusCode);
    next();
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/ping', (req, res) => {
    res.json({status: 'ok'});
});

var logger = winston.createLogger({
    format: winston.format.json (),
    transports: [
        new winston.transports.File({
            filename: 'Appanov_log.log',
            handleExceptions: true
        })
    ]
})


app.get('/weekday', (req, res) => {
    myday = Number(req.query.day);
    
    if(Number.isNaN(myday)){
        res.json({ status: 'error' });
        throw new Error("Error");
    }

    if (myday < 1 || myday > 31) {
        res.json({ status: 'error' });
        throw new Error("Error");
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mydate = new Date();
    mydate.setDate(myday);

    res.json({ weekday: days[mydate.getDay()] })
});

app.post('/calc', (req, res) => {
    myprogram = req.body;
    val1 = Number(myprogram.value1);
    val2 = Number(myprogram.value2);

    if (Number.isNaN(val1) || Number.isNaN(val2)) {
        res.json({ status: 'error' });
        throw new Error("Error");
    }

    switch (myprogram.operation) {
        case 'addition':
            res.json({ status: 'ok', result: val1 + val2 });
            break;
        case 'subtraction':
            res.json({ status: 'ok', result: val1 - val2 });
            break;
        case 'multiplication':
            res.json({ status: 'ok', result: val1 * val2 });
            break;
        case 'division':
            res.json({ status: 'ok', result: val1 / val2 });
            break;
    }

});


 
app.use((err, req, res, next) => {
    logger.error(new Date().toUTCString() + "  " + req.ip + "  " + req.method + "  " + req.url + "  " + res.statusCode + " " + err.message);
    next();
}); 



