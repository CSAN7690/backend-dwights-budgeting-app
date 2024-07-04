const transactions = require('../model/transactions');

// Get all transactions
exports.getAllTransactions = (req, res) => {
    res.status(200).json(transactions);
};

// Get a single transaction by ID
exports.getTransactionById = (req, res) => {
    const transaction = transactions.find(t => t.id === parseInt(req.params.id));
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(transaction);
};

// Create a new transaction
exports.createTransaction = (req, res) => {
    const newTransaction = { id: transactions.length + 1, ...req.body };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
};

// Update a transaction by ID
exports.updateTransaction = (req, res) => {
    const transaction = transactions.find(t => t.id === parseInt(req.params.id));
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

    Object.assign(transaction, req.body);
    res.status(200).json(transaction);
};

// Delete a transaction by ID
exports.deleteTransaction = (req, res) => {
    const index = transactions.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Transaction not found' });

    transactions.splice(index, 1);
    res.status(200).json({ message: 'Transaction deleted' });
};
