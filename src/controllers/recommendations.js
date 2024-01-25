import { pool } from "../database.js";

//Returns the preferences response from the database
async function preferences(idUser) {
  return await pool.query("CALL getPreference(?);", [idUser]);
}

//Returns the recommendations response from the database
async function recommendations(idUser) {
  return await pool.query("CALL getRecomendation(?);", [idUser]);
}

export const methodRecommend = async (req, res) => {
  try {
    const id = req.query.id;
    //get preference value
    const [[[preferencesRows]]] = await preferences(id);

    let rows;

    if (preferencesRows.preference != 0) {
      [[rows]] = await pool.query("CALL getToursForRecomendation(?);", [
        preferencesRows.preference,
      ]);
    } else {
      //get recommendation value
      const [[[recomendationRows]]] = await recommendations(id);
      [[rows]] = await pool.query("CALL getToursForRecomendation(?);", [
        recomendationRows.result,
      ]);
    }

    return res.json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
};
