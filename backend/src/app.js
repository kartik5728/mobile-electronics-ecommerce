import express from 'express';
import cors from 'cors';

import s3Router from './shared/routes/awsS3Route.js';
import productRouter from './shared/routes/productRoute.js';

// App config
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());


// Api Endpoints ***************

// S3 endpoint 
app.use('/api/v1/s3', s3Router);

// Products endpoint
app.use('/api/v1/products', productRouter)

export default app;