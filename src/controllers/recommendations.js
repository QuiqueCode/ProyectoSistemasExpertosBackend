import { pool } from "../database.js";


export const recommendations = async (req, res) => {
    try {

        const [recomendationRows] = await pool.query("CALL getRecomendation(?);", [req.query.id]);

        if (recomendationRows[0].length <= 0) {
            return res.status(404).json({ message: "Recomendación no encontrada." });
        }

        const recomendationId = recomendationRows[0][0].result;
        const [tourRows] = await pool.query("CALL getToursForRecomendation(?);", [recomendationId]);

        if (tourRows[0].length <= 0) {
            return res.status(404).json({ message: "Tours no encontrados para esta recomendación y usuario." });
        }

        const tours = tourRows[0];

        return res.json(tours);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
}