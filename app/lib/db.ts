// file: '@/app/lib/db.ts';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDb(): Promise<any>  {
    return open({
        filename: './mydatabase.db',
        driver: sqlite3.Database
    });
};

export async function getDb(): Promise<void> {
    const db = await openDb();

    // Initialize Database
    await db.exec(`
        CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT NOT NULL               
        )`);

    return db;
}