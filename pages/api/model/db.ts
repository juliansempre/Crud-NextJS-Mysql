import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'nextjs'
})

export {pool};