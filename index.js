import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import inventoryRouter from './src/routes/invetories.js';
import dataSecurityRouter from './src/routes/datasecurities.js';
import productRouter from './src/routes/products.js';
import purchaseOrderRouter from "./src/routes/purchaseorders.js";
import providerRouter from './src/routes/providers.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

const connect = async () =>
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a MongoDB');
    }
    catch (error)
    {
        throw error;
    }
}

mongoose.connection.on('disconnected', () =>
{
    console.log('Desconectado de MongoDB');
});

app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRouter);
app.use("/api/datasecurity", dataSecurityRouter);
app.use("/api/product", productRouter);
app.use("/api/purchaseorder", purchaseOrderRouter);
app.use("/api/provider", providerRouter);

app.use((err, req, res, next) =>
{
    const status = err.state || 500;
    const message = err.message || "Error interno del servidor";

    return res.status(status).json({
        success: false,
        status: status,
        message: message,
        stack: err.stack,
    });
});

app.listen(port, () =>
{
    connect();
    console.log(`Conectado a la base de datos en el puerto ${port}`);
});