const {Products, Categories, Stores} = require('../db');

exports.postCategories = async(req, res) => {
    try {
        const {id, name} = req.body;

        const createCategory = await Categories.create({
            id, name
        });
        res.status(200).json(createCategory);

    } catch (error) {
        console.log(error);
        res.send('Error en el Catch.');
    }
};

exports.getCategories = async(req, res) => {
    try {
        const getCategories = await Categories.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
        });
        getCategories.length > 0 ?
        res.status(200).json(getCategories) :
        res.status(404).json('NTF.');
    } catch (error) {
        console.log(error);
        res.json('Error en el catch.');
    }
};

exports.postProduct = async(req, res) => {
    const {id, name, price, description, categoryId, userId, storeId} = req.body;
    try {
        const postProduct = await Products.create({
            id, name, price, description, categoryId, userId, storeId
        });
        res.status(200).json(postProduct)
    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.');
    }
};

exports.getProducts = async(req, res) => {
    try {
        const allProducts = await Products.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
        });
        allProducts !== undefined ?
        res.status(200).send(allProducts) :
        res.status(404).json('El producto que busca no se Encuentra en la DB.')
    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.');
    }
};
