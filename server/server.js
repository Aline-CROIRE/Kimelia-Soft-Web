// server/server.js
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
const allowedOrigins = ['http://localhost:3000', 'https://your-kimeliasoft-frontend-url.com']; 

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express.json());

// Define Service Schema and Model
const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: String 
}, { timestamps: true });
const Service = mongoose.model('Service', serviceSchema);


async function seedDatabase() {
    try {
        const serviceCount = await Service.countDocuments();
        if (serviceCount === 0) {
            const initialServices = [
                {
                    title: 'Enterprise Software Solutions',
                    description: 'Building robust, scalable, and secure software platforms tailored for large organizations and critical infrastructure.',
                    icon: 'fas fa-server' // Changed icon
                },
                {
                    title: 'Innovative Product Incubation',
                    description: 'Incubating visionary in-house products like Kimelia Luxe, ItekaRise, and Rwanda Digital Twin from concept to market impact.',
                    icon: 'fas fa-lightbulb' 
                },
                {
                    title: 'Client Project Transformation',
                    description: 'Delivering bespoke software projects that combine deep local insights, human-first design, and modern engineering excellence.',
                    icon: 'fas fa-project-diagram' // Changed icon
                },
                {
                    title: 'Strategic Tech Consulting',
                    description: 'Providing expert guidance on digital transformation, technology strategy, and scalable software architecture to empower your business.',
                    icon: 'fas fa-chart-line' // Changed icon
                },
                {
                    title: 'UX/UI Design & Prototyping',
                    description: 'Crafting intuitive, engaging, and beautiful user experiences that resonate with end-users and drive successful adoption.',
                    icon: 'fas fa-paint-brush' // Changed icon
                },
                {
                    title: 'Cloud & Infrastructure Services',
                    description: 'Designing, deploying, and managing robust cloud-native solutions for optimal performance, scalability, and security.',
                    icon: 'fas fa-cloud' // Added a new service example
                }
            ];
            await Service.insertMany(initialServices);
            console.log('Initial services seeded successfully with Font Awesome icons.');
        } else {
            console.log('Services collection already contains data. Skipping seeding.');
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

// Basic Route
app.get('/', (req, res) => {
    res.send('Kimelia Soft API is running!');
});

// Get all services
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
