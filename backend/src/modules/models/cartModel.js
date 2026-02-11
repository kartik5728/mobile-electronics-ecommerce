import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },

    price: {
        type: Number,
        required: true
    }
});

const cartSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },

    items: {
        type: [cartItemSchema]
    }
},
{
    timestamps: true
});

const CartModel = mongoose.models.cart || mongoose.model('Cart', cartSchema);
export default CartModel;