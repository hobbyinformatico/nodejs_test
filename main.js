const http = require('http');

// Creazione del server
const server = http.createServer((req, res) => {
    // Verifica se la richiesta è una richiesta GET
    if (req.method === 'GET' && req.url === '/') {
        // Invia una risposta al client
        res.end('Benvenuto nella mia pagina!');
    }
});

// Porta su cui il server ascolterà
const porta = 3000;

// Avvia il server e mettilo in ascolto sulla porta specificata
server.listen(porta, () => {
    console.log(`Il server è in ascolto sulla porta ${porta}`);
    console.log(`Vai all'indirizzo http://localhost:${porta}`);
});
