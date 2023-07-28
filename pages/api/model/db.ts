//POSTGRES

import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  port: 5432, // Porta padrão do PostgreSQL
  database: 'nextjs',
});

export { pool };


//MYSQL
// import {createPool} from 'mysql2/promise';

// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     port: 3306,
//     database: 'nextjs'
// })

// export {pool};
