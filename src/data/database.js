const Database = require("better-sqlite3");

// Cria ou abre o banco
const db = new Database("database.db");

// Cria tabela de produtos se não existir
db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL
    );
`);

module.exports = db;
