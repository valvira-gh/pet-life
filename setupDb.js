// setupDb.js
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDb() {
    return open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
}

async function setupDb() {
    const db = await openDb();
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      password TEXT
    );
    CREATE TABLE IF NOT EXISTS pets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      name TEXT,
      species TEXT,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `);
    console.log('Database setup completed.');
}

setupDb();
