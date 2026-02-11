import ProductModel from "../models/productModel.js";
import { v4 as uuidv4 } from 'uuid'

// function for adding products
const addProduct = async (req, res) => {
    try {

        const { name, image, description, price, discount, category, brand, stock, tags, specialTags, bestseller, specs } = req.body;

        const productData = {
            name, 
            image: JSON.parse(image),
            description,
            price: Number(price),
            discount: Number(discount),
            category,
            brand,
            stock: Number(stock),
            tags: JSON.parse(tags),
            specialTags: JSON.parse(specialTags),
            bestseller: bestseller === "true" ? true : false,
            specs: JSON.parse(specs)
        };

        const product = new ProductModel(productData);
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


// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    try {
        console.log(req.query);
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 3;
        const skip = (page - 1) * limit;

        const products = await ProductModel.find()
                        .skip(skip)
                        .limit(limit);
                        
        const totalProducts = await ProductModel.countDocuments({});

        res.status(200).json({
            success: true,
            totalProducts,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            products
        });

    } catch (error) {
        console.log("error in getting products: ", error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// DELETE SINGLE PRODUCT BY ID
const DeleteProductById = async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if(!deletedProduct) {
            res.status(404).json({
                success: false,
                message: "product not found"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            })
        }
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                error: error.message
            }
        )
        console.log(error);
    }
}

export { addProduct, getAllProducts, DeleteProductById }