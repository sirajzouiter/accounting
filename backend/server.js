var express = require('express');
var cors = require('cors');


var app = express();
app.use(cors());

app.get('/cities', (req, res, next) => {
    const maVille = {
        name: 'Mahdia',
        geoposition: {
            longitude: '35',
            latitude: '11'
        },
        toString: () => this.name
    };

    res.json(maVille);
})

app.get('/users', (req, res, next) => {
    const users = [{
            name: 'ferid',
            email: 'helaliferid@gmail.com',
            password: 'toto'
        },
        {
            name: 'salah',
            email: 'salah@gmail.com',
            password: 'toto'
        },
        {
            name: 'karim',
            email: 'karim@gmail.com',
            password: 'toto'
        },
        {
            numder: 5
        }
    ];

    res.status(200).end(JSON.stringify(users));
});

app.listen(3030, function () {
    log('Server Listening on http://localhost:3030');
})


function log(msg) {
    console.log(msg);
}

// console / lite-server / AJAX / Xhr / cors /require / nodemon