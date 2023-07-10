import config from '../../dbconfig.js';
import sql from 'mssql';
import Preguntas from '../models/Preguntas.js';

class PreguntasService {
    getAll = async() => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Preguntas');
                returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getById = async(id) => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Preguntas WHERE Id = @pId');
                returnEntity = result.recordsets;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (ingrediente) => {
        let rowsAffected = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pPregunta', sql.VarChar, pizza.Nombre)
                .query('INSERT INTO Preguntas(Pregunta) VALUES (@pPregunta)');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default IngredienteService;
