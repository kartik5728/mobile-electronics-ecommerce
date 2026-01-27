import express from 'express'
import { v4 as uuidv4 } from 'uuid'

import createPresignedUrlWithClient from '../../config/aws_S3_config.js';

const s3Router = express.Router();

s3Router.post('/get-presigned-url', async (req, res) => {
    try {
        const { mime } = req.body;

    // generate unique file name
    const fileName = uuidv4();

    // final File Name
    const finalName = `${fileName}.${mime}`;

    const url = await createPresignedUrlWithClient({
        bucket: process.env.AWS_S3_BUCKET_NAME,
        key: finalName
    })

    res.json({
        url: url,
        finalName: finalName
    })
    } catch (error) {
        console.log("error in awsS3Route (generating presigned url): ", error);
    }
})


export default s3Router;
