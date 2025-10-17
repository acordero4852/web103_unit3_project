import pg from 'pg';
import 'dotenv/config.js';

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
};

console.log('Database configuration:', config);

export const pool = new pg.Pool(config);
