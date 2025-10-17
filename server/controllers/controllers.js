import { pool } from '../config/database.js';

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events');
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations');
        res.status(200).json(results.rows);
    }
    catch (err) {
        res.status(409).json({ error: err.message });
    }
}

const getLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await pool.query('SELECT * FROM locations WHERE id = $1', [id]);
        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({ error: err.message });
    }
}

export default {
    getEvents,
    getEventById,
    getLocations,
    getLocationById
}
