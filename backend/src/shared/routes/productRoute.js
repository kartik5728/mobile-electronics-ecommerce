import express from 'express'
import { addProduct, getAllProducts, DeleteProductById } from '../../modules/controllers/productController.js';

const productRouter = express.Router();

// Route for adding products
productRouter.post('/add', addProduct);

// Route for getting all products
productRouter.get('/all', getAllProducts);

// Delete Product by Id
productRouter.delete('/delete', DeleteProductById);

export default productRouter;