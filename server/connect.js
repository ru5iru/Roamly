import pkg from 'pg';
const { Pool } = pkg;

const dbConfig = {
  host: "localhost",
  user: "postgres",
  password: "harini",
  database: "Roamly",
  port: 5432, // Default PostgreSQL port
};

const db = new Pool(dbConfig);

export { db };


