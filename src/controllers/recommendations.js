import { pool } from "../database.js";


export const tours = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL getRecomendation(?);")
        if (rows[0].length <= 0) {
            return res.status(404).json({ message: "Recomendacion no encontrada." })
        }
        return res.json(rows[0])
    } catch (error) {
        return error;
    }
}