const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();

// Enable CORS middleware
app.use(cors({
    origin: '*', // Allow all origins (for development purposes). Replace '*' with your frontend URL in production.
    methods: ['GET', 'POST'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// API endpoint
app.get("/api/:count", (req, res) => {
    const count = parseInt(req.params.count, 10); 
    const data = {
        cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
        temperatures: [15, 18, 20, 22, 25, 12, 17, 19, 21, 16], 
        weather_conditions: ["Sunny", "Cloudy", "Rainy", "Thunderstorm", "Windy", "Foggy", "Snowy", "Clear", "Hazy", "Partly Cloudy"],
        population_in_millions: [8.3, 3.9, 2.7, 2.3, 1.6, 1.5, 1.4, 1.4, 1.3, 1.0]
    };

    const limit = Math.min(count, data.cities.length);

    const limitedData = {
        cities: data.cities.slice(0, limit),
        temperatures: data.temperatures.slice(0, limit),
        weather_conditions: data.weather_conditions.slice(0, limit),
        population_in_millions: data.population_in_millions.slice(0, limit)
    };

    res.json(limitedData); 
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
