import express from 'express';
import ejs from 'ejs';

const server = express();
server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

server.listen(3132);
console.log('server on port 3132');
