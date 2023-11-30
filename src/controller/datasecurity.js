import DataSecurity from "../model/datasecurity.js";

const getDataSecurity = async (req, res, next) =>
{
    try
    {
        const dataSecurity = await DataSecurity.findById(req.params.id)
        res.status(200).json(dataSecurity);
    }
    catch (e)
    {
        next(e);
    }
}

const getAllDataSecurities = async (req, res, next) =>
{
    try
    {
        const dataSecurities = await DataSecurity.find();
        res.status(200).json(dataSecurities);
    }
    catch (e)
    {
        next(e);
    }
}

const createDataSecurity = async (req, res, next) =>
{
    const newDataSecurity = new DataSecurity(req.body);

    try
    {
        const savedDataSecurity = await newDataSecurity.save();
        res.status(200).json(savedDataSecurity);
    }
    catch (e)
    {
        next(e);
    }
}

const updateDataSecurity = async (req, res, next) =>
{
    try
    {
        const updatedDataSecurity = await DataSecurity.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true

            }
        );
        res.status(200).json(updatedDataSecurity);
    }
    catch (e)
    {
        next(e);
    }
}

const deleteDataSecurity = async (req, res, next) =>
{
    try
    {
        await DataSecurity.findByIdAndDelete(req.params.id);
        res.status(200).json("DataSecurity eliminado exitosamente");
    }
    catch (e)
    {
        next(e);
    }
}

export {
    getDataSecurity,
    getAllDataSecurities,
    createDataSecurity,
    updateDataSecurity,
    deleteDataSecurity
}