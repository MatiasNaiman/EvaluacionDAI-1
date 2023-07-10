import express from "express";

import Preguntas from "./src/models/Preguntas.js";

import PreguntasService from "./src/services/Preguntas-services.js";

import router from "./src/controllers/PreguntasController.js";
import cors from "cors";

const app = express();
const port = 5000;

let svcPizza = new PreguntasService();

app.use(cors());
app.use(express.json());
app.use("/api/Preguntas", router);