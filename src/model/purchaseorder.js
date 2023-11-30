import mongoose from "mongoose";
const { Schema } = mongoose;

const PurchaseOrderSchema = new Schema({
    orderId: {
        type: String,
        required: true,
    },
    providerId: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("PurchaseOrder", PurchaseOrderSchema);