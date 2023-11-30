import mongoose from "mongoose";
const { Schema } = mongoose;

const InventorySchema = new Schema({
    inventoryId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Inventory", InventorySchema);