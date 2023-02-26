// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const data = require("./src/js/alumnos.js");
// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
let listadoAlumnos = alumnos.map((alumno) => alumno);
// Configure port  to listen for this server 😎
const PORT = process.env.PORT || 3000;
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return 'Alumnos' data
app.get("/api/alumnos", (req, res) => {
  res.send(listadoAlumnos);
});
// defining an endpoint to return Instructions for API
app.get("/", (req, res) => {
  res.send(
    `<h1>Intructiones de uso de la API</h1><ol><li>Escriba en la barra de navegación  localhost:${PORT}/api/alumnos </li><li>Copie el contenido a otro archivo o úselo en su propia aplicación.</li></ol><p>Gracias por usa nuestra API.</p></div><div><a href="https://www.google.com/">Regresar a Internet</a></div>`
  );
});
app.get("/api", (req, res) => {
  res.send(
    `<h1>Intructiones de uso de la API</h1><ol><li>Escriba en la barra de navegación  localhost:${PORT}/api/alumnos </li><li>Copie el contenido a otro archivo o úselo en su propia aplicación.</li></ol><p>Gracias por usa nuestra API.</p></div><div><a href="https://www.google.com/">Regresar a Internet</a></div>`
  );
});

// starting the server
app.listen(PORT, () => {
  console.log(
    `Listening on port ${PORT}\n\tAccess URL:\n\t\thttp://localhost:${PORT}\n\t\tAPI URI in http://localhost:${PORT}/api/alumnos`
  );
  console.log(`\t\tSe han encontrado ${listadoAlumnos.length} alumnos.\n`);
});
