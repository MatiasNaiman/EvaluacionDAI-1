class Preguntas{
    Id;
    Pregunta;
    Respuesta1;
    Respuesta2;
    Respuesta3;
    Respuesta4;
    RespuestaCorrecta;
    FechaCreacion;

    constructor(pregunta, respuesta1, respuesta2, respuesta3, respuesta4, respuestaCorrecta, fechaCreacion, id = 0){
        this.Pregunta = pregunta;
        this.respuesta1 = Respuesta1;
        this.Respuesta2 = respuesta2;
        this.Respuesta3 = respuesta3;
        this.Respuesta4 = respuesta4;
        this.RespuestaCorrecta = respuestaCorrecta
        this.Id = id;
    }
}

export default Preguntas;