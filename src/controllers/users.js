import { pool } from "../database.js";
import bcrypt from 'bcrypt';
import InternalError from "../errors/handleError.js";

export const createUser = async (req, res) => {
    try {

        const {
            _name,
            _surname1,
            _surname2,
            _emailAddress,
            _password
        } = req.body;

        const saltRounds = 5
        const hashedPassword = await bcrypt.hash(_password, saltRounds);
        const [value] = await pool.query(
            'SELECT createUser(?,?,?,?,?) AS "result"',
            [
                _name,
                _surname1,
                _surname2,
                _emailAddress,
                hashedPassword
            ]
        );

        if (value[0].result === 0) {
            return res
                .status(403)
                .json({ message: "The user already exist" });
        }
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        return InternalError(res, error);
    }

};

export const login = async (req, res) => {
    try {
        const { _emailAddress, _password } = req.body;
        const [data] = await pool.query(
          "CALL login(?)", [_emailAddress]
        )
        const comparacion = await bcrypt.compare(_password, data[0][0].password);
        if (comparacion) {
          return res.status(200).json({ message: 1 })
        } else {
          return res.status(403).json({ message: 0 })
        }
      } catch (error) {
        return res.status(500).json({ message: 2 })
      }
}