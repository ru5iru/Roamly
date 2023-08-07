const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'roamly',
  host: 'localhost',
  database: 'testroamly',
  password: 'roamly',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Routes for managing advertisements will be defined here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Get all advertisements
app.get('/advertisements', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM advertisements ORDER BY ad_id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new advertisement
app.post('/advertisements', async (req, res) => {
  const { title, description, ad_media, start_date, end_date } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO advertisements (title, description, ad_media, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, ad_media, start_date, end_date]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an advertisement
app.put('/advertisements/:ad_id', async (req, res) => {
  const adId = req.params.ad_id;
  const { title, description, ad_media, start_date, end_date, is_active } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE advertisements SET title=$1, description=$2, ad_media=$3, start_date=$4, end_date=$5, is_active=$6, updated_at=NOW() WHERE ad_id=$7 RETURNING *',
      [title, description, ad_media, start_date, end_date, is_active, adId]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an advertisement
app.delete('/advertisements/:ad_id', async (req, res) => {
  const adId = req.params.ad_id;
  try {
    await pool.query('DELETE FROM advertisements WHERE ad_id=$1', [adId]);
    res.json({ message: 'Advertisement deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ...
