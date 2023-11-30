import Provider from "../model/provider.js";

const getProvider = async (req, res, next) =>
{
    try
    {
        const provider = await Provider.findById(req.params.id)
        res.status(200).json(provider);
    }
    catch (e)
    {
        next(e);
    }
}

const getAllProviders = async (req, res, next) =>
{
    try
    {
        const providers = await Provider.find();
        res.status(200).json(providers);
    }
    catch (e)
    {
        next(e);
    }
}

const createProvider = async (req, res, next) =>
{
    const newProvider = new Provider(req.body);

    try
    {
        const savedProvider = await newProvider.save();
        res.status(200).json(savedProvider);
    }
    catch (e)
    {
        next(e);
    }
}

const updateProvider = async (req, res, next) =>
{
    try
    {
        const updatedProvider = await Provider.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true

            }
        );
        res.status(200).json(updatedProvider);
    }
    catch (e)
    {
        next(e);
    }
}

const deleteProvider = async (req, res, next) =>
{
    try
    {
        await Provider.findByIdAndDelete(req.params.id);
        res.status(200).json("Proveedor eliminado exitosamente");
    }
    catch (e)
    {
        next(e);
    }
}

export {
    getProvider,
    getAllProviders,
    createProvider,
    updateProvider,
    deleteProvider
}