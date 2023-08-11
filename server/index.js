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

// Get all advertisements
app.get('/advertisements', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM advertisements ORDER BY ad_id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get advertisement by ID
app.get('/advertisements/:ad_id', async (req, res) => {
  const adId = req.params.ad_id;
  try {
    const { rows } = await pool.query('SELECT * FROM advertisements WHERE ad_id = $1', [adId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Advertisement not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Get advertisement by ID
app.get('/advertisements/:ad_id', async (req, res) => {
  const adId = req.params.ad_id;
  try {
    console.log('Fetching advertisement with ad_id:', adId); // Add this line

    const { rows } = await pool.query('SELECT * FROM advertisements WHERE ad_id = $1', [adId]);
    
    console.log('Query result:', rows); // Add this line

    if (rows.length === 0) {
      console.log('Advertisement not found');
      return res.status(404).json({ error: 'Advertisement not found' });
    }

    console.log('Sending advertisement data:', rows[0]);
    res.json(rows[0]);
  } catch (err) {
    console.error('Error:', err); // Add this line
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
  const { title, description, start_date, end_date, is_active } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE advertisements SET title=$1, description=$2, start_date=$3, end_date=$4, is_active=$5, updated_at=NOW() WHERE ad_id=$6 RETURNING *',
      [title, description, start_date, end_date, is_active, adId]
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
