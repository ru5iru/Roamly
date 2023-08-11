// import pkg from 'pg';
// import { Pool } from "pg";

import pkg from 'pg';
const { Pool } = pkg;
// const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Sneha123",
    database: "roamly_interim",
    port: 5432, // Default PostgreSQL port
});

// const dbconfig = {
//     host: "localhost",
//     user: "postgres",
//     password: "Sneha123",
//     database: "test1",
//     port: 5432, // Default PostgreSQL port
// }

// module.exports = pool;
export default pool;

// const db = new pool(dbconfig);

// export { db };
