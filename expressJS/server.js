const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'expresstwl'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Create an Express app
const app = express();

// Set up middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

// Define a route to retrieve all orders
app.get('/pesanan', (req, res) => {
  const sql = 'SELECT * FROM pesanan';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving orders:', err);
      res.status(500).json({ error: 'Failed to retrieve orders' });
      return;
    }

    res.json(results);
  });
});

// Define a route to create a new order
// app.post('/orders', (req, res) => {
//   const { No_Pesanan, Nama_Barang, Tipe_Gelang, Alamat, Ulasan } = req.body;

//   const sql = 'INSERT INTO Pesanan (No_Pesanan, Nama_Barang, Tipe_Gelang, Alamat, Ulasan) VALUES (?, ?, ?, ?, ?)';
//   const values = [No_Pesanan, Nama_Barang, Tipe_Gelang, Alamat, Ulasan];

//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Error creating order:', err);
//       res.status(500).json({ error: 'Failed to create order' });
//       return;
//     }

//     res.json({ message: 'Order created successfully', orderId: result.insertId });
//   });
// });

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
