const express = require('express');
const cors = require('cors');
const transactionController = require('./src/controllers/transactionController');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// CRUD Routes
// Get all transactions
app.get('/transactions', transactionController.getAllTransactions);
// Get a single transaction by ID
app.get('/transactions/:id', transactionController.getTransactionById);
// Create a new transaction
app.post('/transactions', transactionController.createTransaction);
// Update a transaction by ID
app.put('/transactions/:id', transactionController.updateTransaction);
// Delete a transaction by ID
app.delete('/transactions/:id', transactionController.deleteTransaction);

// Handle not found routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
