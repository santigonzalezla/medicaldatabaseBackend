import Inventory from "../model/inventory.js";

const getInventory = async (req, res, next) =>
{
    try
    {
        const inventory = await Inventory.findById(req.params.id)
        res.status(200).json(inventory);
    }
    catch (e)
    {
        next(e);
    }
}

const getAllInventories = async (req, res, next) =>
{
    try
    {
        const inventories = await Inventory.find();
        res.status(200).json(inventories);
    }
    catch (e)
    {
        next(e);
    }
}

const createInventory = async (req, res, next) =>
{
    const newInventory = new Inventory(req.body);

    try
    {
        const savedInventory = await newInventory.save();
        res.status(200).json(savedInventory);
    }
    catch (e)
    {
        next(e);
    }
}

const updateInventory = async (req, res, next) =>
{
    try
    {
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true

            }
        );
        res.status(200).json(updatedInventory);
    }
    catch (e)
    {
        next(e);
    }
}

const deleteInventory = async (req, res, next) =>
{
    try
    {
        await Inventory.findByIdAndDelete(req.params.id);
        res.status(200).json("Inventario eliminado exitosamente.");
    }
    catch (e)
    {
        next(e);
    }
}

export {
    getInventory,
    getAllInventories,
    createInventory,
    updateInventory,
    deleteInventory,
}