const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bankdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a bank schema and model
const bankSchema = new mongoose.Schema({
  bank_name: String
});
const Bank = mongoose.model('Bank', bankSchema);

// Create a branch schema and model
const branchSchema = new mongoose.Schema({
  bank_id: mongoose.Schema.Types.ObjectId,
  branch_name: String,
  address: String,
  city: String,
  state: String
});
const Branch = mongoose.model('Branch', branchSchema);

// Bank list endpoint
app.get('/banks', async (req, res) => {
  try {
    const bankList = await Bank.find({}, 'bank_id bank_name');
    res.json(bankList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Branch details endpoint
app.get('/banks/:bank_id/branches/:branch_id', async (req, res) => {
  try {
    const bankId = req.params.bank_id;
    const branchId = req.params.branch_id;

    const branchDetails = await Branch.findOne(
      { bank_id: bankId, _id: branchId },
      'bank_id branch_id branch_name address city state'
    );

    if (branchDetails) {
      res.json(branchDetails);
    } else {
      res.status(404).json({ error: 'Branch not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});