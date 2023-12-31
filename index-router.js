import express from "express";
import cors    from "cors";
import PreguntasRouter from "./src/controllers/PreguntasController.js";

const app  = express();
const port = 5000;                  

app.use(cors());                    
app.use(express.json());            
app.use(express.static('public'));  

app.use("/api/Preguntas", PreguntasRouter);

app.listen(port, () => {
  console.log(`"server-router" Listening on port ${port}`);
});
