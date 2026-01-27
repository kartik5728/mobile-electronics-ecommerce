import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image:{ 
        type: [String], required: true
     },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    specialTags: {
        type: [String],
        required: true
    },
    bestseller: {
        type: Boolean,
        required: true
    },
    specs: {
      type: Map,
      of: String
    },
    rating: {
        type: Number,
        default: 1
    },
    reviewsCount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;