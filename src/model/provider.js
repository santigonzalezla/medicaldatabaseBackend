import mongoose from "mongoose";
const { Schema } = mongoose;

const ProviderSchema = new Schema({
    providerId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Provider", ProviderSchema);