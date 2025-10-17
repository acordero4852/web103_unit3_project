import { locationData, eventData } from '../data/data.js';
import { pool } from './database.js';

const createTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;
    
        DROP TABLE IF EXISTS locations;
    
        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            city TEXT NOT NULL,
            state TEXT NOT NULL,
            zip TEXT NOT NULL,
            image TEXT NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            date TEXT NOT NULL,
            time INT NOT NULL,
            location INT REFERENCES locations(id),
            image TEXT NOT NULL,
            remaining JSON NOT NULL
        );
    `;
    try {
        await pool.query(createTableQuery);
        console.log('🎉 events and locations tables created successfully');
    } catch (err) {
        console.error('⚠️ error creating events and locations tables', err);
    }
};

const seedTables = async () => {
    await createTable();
    
    for (const location of locationData) {
        const insertLocationQuery = `
            INSERT INTO locations (id, name, address, city, state, zip, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        const values = [location.id, location.name, location.address, location.city, location.state, location.zip, location.image];
        try {
            await pool.query(insertLocationQuery, values);
            console.log(`🎉 location ${location.id} inserted successfully`);
        } catch (err) {
            console.error(`⚠️ error inserting location ${location.id}`, err);
        }
    }

    for (const event of eventData) {
        const insertEventQuery = `
            INSERT INTO events (id, title, date, time, location, image, remaining)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        const values = [event.id, event.title, event.date, event.time, event.location, event.image, JSON.stringify(event.remaining)];
        try {
            await pool.query(insertEventQuery, values);
            console.log(`🎉 event ${event.id} inserted successfully`);
        } catch (err) {
            console.error(`⚠️ error inserting event ${event.id}`, err);
        }
    }
};

seedTables();
