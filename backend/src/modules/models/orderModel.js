import mongoose from 'mongoose'


const PAYMENT_METHODS = ['STRIPE', 'RAZOR_PAY', 'CASH_ON_DELIVERY'];
const ORDER_STATUS = ['ORDER_PLACED', 'ORDER_SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED'];
const orderSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: {
        type: Array,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    address: {
        type: Object,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: PAYMENT_METHODS,
        required: true,
        default: PAYMENT_METHODS[0]
    },

    payment: {
        type: Boolean,
        required: true,
        default: false
    },

    date: {
        type: Number,
        required: true
    }
        
},
{
    timestamps: true
});

const OrderModel = mongoose.models.order || mongoose.model('Order', orderSchema);
export default OrderModel;