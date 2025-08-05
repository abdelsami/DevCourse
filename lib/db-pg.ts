import { Pool } from 'pg';

const pool = new Pool({
  user: 'doadmin',
  password: 'AVNS_Ut0DFXWHd08hU3XS4-5', // Keep this secure in .env
  host: 'db-postgresql-nyc3-25873-do-user-24449408-0.l.db.ondigitalocean.com',
  port: 25060,
  database: 'defaultdb',
  ssl: {
    rejectUnauthorized: false, // Required for DigitalOcean's SSL
  },
});


interface Course {
  id: string;
  title: string;
  ref: number;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  level: string;
  duration: string;
  image: string;
  createdAt: string;
}



export async function query(text: string, 
  params?: Course[]) {
  try {
    const result = await pool.query(text, params);
    return result.rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Optional: Export pool for manual connection management
export { pool };

// Test connection on startup (optional)
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (
  
  err) => {
  console.error('Database pool error:', err);
});