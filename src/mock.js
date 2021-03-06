const http = require('http');

const server = http.createServer( (req, res) => {

    console.log('przyszlo zapytanie');

    if (req.method === 'GET' && req.url === '/czlowiek') { 
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
            },
            {
                "id": 3,
                "imie": "ted",
                "nazwisko": "kowalski"
            },
            {
                "id": 4,
                "imie": "ala",
                "nazwisko": "kowalski"
            }
        ]
        `);
    } else if (req.method === 'GET' && req.url.startsWith('/czlowiek/')) { 
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        res.end(`
            {
                "id": 1,
                "imie": "hubert",
                "nazwisko": "nowak"
            }
        `);
    } else if (req.method === 'POST' && req.url === '/czlowiek') {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end();
    } else if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end();
    } else if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.end();
    }
} );

server.listen(3002, '127.0.0.1', () => {
    console.log('serwer wystartowal');
})

