import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Has entrado en raiz');
});

server.listen(3132);
console.log('server on port 3132');