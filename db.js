const sqlite3 = require('sqlite3')
const { open } = require('sqlite');

export async function openDb() {
    return open({
        filename: 'pets.db',
        driver: sqlite3.Database
    });
}