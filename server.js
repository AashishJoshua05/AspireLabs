const express = require('express');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chat_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the message schema
const messageSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  username: { type: String, required: true },
  timestamp: { type: String, required: true },
  content: { type: String, required: true }
});

// Create a message model based on the schema
const Message = mongoose.model('Message', messageSchema);

// Middleware to parse JSON
app.use(express.json());

// Define the API endpoints
app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'An error occurred while fetching messages' });
  }
});

app.post('/messages', async (req, res) => {
  const { id, username, timestamp, content } = req.body;
  try {
    const newMessage = new Message({ id, username, timestamp, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'An error occurred while saving the message' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
