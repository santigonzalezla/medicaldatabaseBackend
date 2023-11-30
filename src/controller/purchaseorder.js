import PurchaseOrder from "../model/purchaseorder.js";

const getPurchaseOrder = async (req, res, next) =>
{
    try
    {
        const purchaseOrder = await PurchaseOrder.findById(req.params.id)
        res.status(200).json(purchaseOrder);
    }
    catch (e)
    {
        next(e);
    }
}

const getAllPurchaseOrders = async (req, res, next) =>
{
    try
    {
        const purchaseOrders = await PurchaseOrder.find();
        res.status(200).json(purchaseOrders);
    }
    catch (e)
    {
        next(e);
    }
}

const createPurchaseOrder = async (req, res, next) =>
{
    const newPurchaseOrder = new PurchaseOrder(req.body);

    try
    {
        const savedPurchaseOrder = await newPurchaseOrder.save();
        res.status(200).json(savedPurchaseOrder);
    }
    catch (e)
    {
        next(e);
    }
}

const updatePurchaseOrder = async (req, res, next) =>
{
    try
    {
        const updatedPurchaseOrder = await PurchaseOrder.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true

            }
        );
        res.status(200).json(updatedPurchaseOrder);
    }
    catch (e)
    {
        next(e);
    }
}

const deletePurchaseOrder = async (req, res, next) =>
{
    try
    {
        await PurchaseOrder.findByIdAndDelete(req.params.id);
        res.status(200).json("PurchaseOrder eliminado exitosamente");
    }
    catch (e)
    {
        next(e);
    }
}

export {
    getPurchaseOrder,
    getAllPurchaseOrders,
    createPurchaseOrder,
    updatePurchaseOrder,
    deletePurchaseOrder
}