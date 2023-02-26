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
const ads = alumnos.map((alumno) => alumno);

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads

app.get("/api/alumnos", (req, res) => {
    res.send(ads);
});
// defining an endpoint to return all ads
app.get("/", (req, res) => {
    res.send(
        '<h1>Intructiones de uso de la API</h1><ol><li>Escriba en la barra de navegación  localhost:5000/api/alumnos </li><li>Copie el contenido a otro archivo o úselo en su propia aplicación.</li></ol><p>Gracias por usa nuestra API.</p></div><div><a href="https://www.google.com/">Regresar a Internet</a></div>'
    );
});
app.get("/api", (req, res) => {
    res.send(
        '<h1>Intructiones de uso de la API</h1><ol><li>Escriba en la barra de navegación  localhost:5000/api/alumnos </li><li>Copie el contenido a otro archivo o úselo en su propia aplicación.</li></ol><p>Gracias por usa nuestra API.</p></div><div><a href="https://www.google.com/">Regresar a Internet</a></div>'
    );
});
//Config this data if you want!
let port = process.env.PORT || 3000;
// starting the server
app.listen(port, () => {
    console.log(`Listening on port ${port}\n(http://localhost:${port}/)`);
});