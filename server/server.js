// server/server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Body parser for JSON requests

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
    res.send('Kimelia Soft API is running!');
});

// Example Route: Services (you'll expand this)
const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: String // Optional: for displaying an icon
});
const Service = mongoose.model('Service', serviceSchema);

// Get all services
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new service (example: for initial data seeding or admin panel)
app.post('/api/services', async (req, res) => {
    const service = new Service({
        title: req.body.title,
        description: req.body.description,
        icon: req.body.icon
    });
    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});