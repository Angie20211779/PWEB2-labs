const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/get-peliculas',(req, res) =>{
  const file= fs.readFile.Sync('/peliculas.jsom', UTF-8)
  res.setHeader('Content-Type', 'text/json');
  res.send(file);
})
app.post('/new', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const Nombre = req.body.Nombre;
  const Nomrating = req.body.rating;

  const file = fs.readFile('/peliclas.json', 'UTF-8')
  const json = fs.readFile(file)

  json.peliculas.push({"Nombre":Nombre, "rating": parseInt(raiting)})
  file= fs.writeFileSync('/peliclas.json', JSON.stringify(json))

  res.send('Datos guardados');
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('Error no capturado:', err);
});

