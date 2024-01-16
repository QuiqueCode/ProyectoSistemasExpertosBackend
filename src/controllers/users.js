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
        let response = ""
        const [hashedPassword] = await pool.query("CALL login(?);", [_emailAddress]);

        if (hashedPassword[0][0] !== undefined) {
            const passwordMatch = await bcrypt.compare(_password, hashedPassword[0][0].password);
            if (passwordMatch) {
                response = res.status(200).json({ status: 1 });
            } else {
                response = res.status(404).json({ status: 0 });
            }
        }else{
            response = res.status(404).json({ status: 0 });
        }
        return response;
    } catch (error) {
        InternalError(res, error);
    }
}