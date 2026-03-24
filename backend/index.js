const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();

// Request Logger Middleware for Debugging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});
const corsOptions = {
    origin: [
        "http://localhost:8080",
        "http://localhost:8081",
        "https://haryanadeendayalplot.org.in",
        "https://www.haryanadeendayalplot.org.in"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const inquiriesRoutes = require('./routes/inquiries');
const settingsRoutes = require('./routes/settings');
const paymentsRoutes = require('./routes/payments');

// Robus route mounting (handles both /api/path and /path if proxy strips prefix)
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/inquiries', inquiriesRoutes);
app.use('/inquiries', inquiriesRoutes);

app.use('/api/settings', settingsRoutes);
app.use('/settings', settingsRoutes);

app.use('/api/payments', paymentsRoutes);
app.use('/payments', paymentsRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));