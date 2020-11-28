const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    
    res.render('home', {
        name: 'World',
    });
});

app.get('/about', (req, res) => {
    
    res.render('about')
});

app.get('/data', (req, res) => {
    res.send('Data');
});

app.listen(port, () => {
    console.log(`Port ${port}`);
});