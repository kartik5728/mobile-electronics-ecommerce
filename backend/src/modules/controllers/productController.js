import productModel from "../models/productModel.js";
import { v4 as uuidv4 } from 'uuid'

// function for adding products
const addProduct = async (req, res) => {
    try {

        const { name, image, description, price, discount, category, brand, stock, tags, specialTags, bestseller, specs } = req.body;

        const productData = {
            name, 
            image,
            description,
            price: Number(price),
            discount: Number(discount),
            category,
            brand,
            stock: Number(stock),
            tags,
            specialTags,
            bestseller: bestseller === "true" ? true : false,
            specs
        };

        const product = new productModel(productData);
        await product.save();

        res.json({
            success: true,
            message: "product added successfully!"
        });
        
        
    } catch (error) {
        console.log("Error in adding product: " + error);
        res.json({
            success: false,
            message: "error in adding product"
        });
    }
}


export { addProduct }