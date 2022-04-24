const http = require('http');

const server = http.createServer( (_req, res) => {

    console.log('przyszlo zapytanie');
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.end(`
    [
        {
            "id": 1,
            "imie": "hubert",
            "nazwisko": "nowak"
        },
        {
            "id": 2,
            "imie": "adam",
            "nazwisko": "kowalski"
        }
    ]
    `);
} );

server.listen(3002, '127.0.0.1', () => {
    console.log('serwer wystartowal');
})

