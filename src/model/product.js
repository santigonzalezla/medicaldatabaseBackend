import mongoose from "mongoose";
import { Schema } from 'mongoose';

const ProductSchema = new Schema({
    productId: {
        type: String,
        required: true,
    },
    providerId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);