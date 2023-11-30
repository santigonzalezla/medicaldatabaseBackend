import Product from "../model/product.js";

const getProduct = async (req, res, next) =>
{
try
    {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    }
    catch (e)
    {
        next(e);
    }
}

const getAllProducts = async (req, res, next) =>
{
    try
    {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (e)
    {
        next(e);
    }
}

const createProduct = async (req, res, next) =>
{
    const newProduct = new Product(req.body);

    try
    {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch (e)
    {
        next(e);
    }
}

const updateProduct = async (req, res, next) =>
{
    try
    {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true

            }
        );
        res.status(200).json(updatedProduct);
    }
    catch (e)
    {
        next(e);
    }
}

const deleteProduct = async (req, res, next) =>
{
    try
    {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Producto eliminado exitosamente");
    }
    catch (e)
    {
        next(e);
    }
}

export {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}