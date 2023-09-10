const express = require('express');
const server = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

server.use(express.static('public'));


// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});