import { pool } from "../database.js";


export const preference = async (req, res) => {
    try {

        const [preferencesnRows] = await pool.query("CALL getPreference(?);", [req.query.id]);

        if (preferencesnRows[0].length <= 0) {
            return res.status(404).json({ message: "Preferencia no encontrada." });
        }

        const preferencesId = preferencesnRows[0][0].preference;
        const [tourRows] = await pool.query("CALL getToursForRecomendation(?);", [preferencesId]);

        if (tourRows[0].length <= 0) {
            return res.status(404).json({ message: "Tours no encontrados para esta preferencia y usuario." });
        }

        const tours = tourRows[0];

        return res.json(tours);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor." });
    }
}