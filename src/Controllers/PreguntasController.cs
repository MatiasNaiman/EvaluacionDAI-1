import { Router } from 'express';
import PreguntasService from '../services/Preguntas-services.js';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const router = Router();
const svcPreguntas = new PreguntasService();

router.get('', async (req, res, next) => {
    try {
        let GetAll = await svcPizza.getAll();
        res.send(GetAll);
    } catch (error) {
        res.send("error");
    }
});

router.post('', async (req, res) => {
    try {
        console.log(req.body);
        let svc2 = new Preguntas();
        let nuevaPregunta = new svc2.constructor(
            req.body.Pregunta,
            req.body.Respuesta1,
            req.body.Respuesta2,
            req.body.Respuesta3,
            req.body.Respuesta4,
            req.body.RespuestaCorrecta,
            req.body.FechaCreacion,
        );
        let Insert = await svcPizza.insert(pizzaNew);
        res.send(Insert);
    } catch (error) {
        res.send("error");
    }
});

export default router; 