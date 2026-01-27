import dotenv from 'dotenv';

import app from './src/app.js';
import connectDB from './src/config/mongoDB.js'
dotenv.config();

// Connect to Database
connectDB();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
