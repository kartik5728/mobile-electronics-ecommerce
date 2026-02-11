import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        // default: []
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        // default: []
    }

}, 
{
 timestamps: true   
});

const UserModel = mongoose.models.users || mongoose.model('User', userSchema);
export default UserModel;