import mongoose from "mongoose";
import { Schema } from 'mongoose';

const DataSecuritySchema = new Schema({
    registerId: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("DataSecurity", DataSecuritySchema);