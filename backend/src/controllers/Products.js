const {Products} = require('../db');

exports.postProduct = async (req, res) => {
    const {id, name, price, description, categoryId, userId, storeId} = req.body;
    try {
        const postProduct = await Products.create({
            id, name, price, description, categoryId, userId, storeId
        });
        postProduct && res.status(200).json(postProduct)
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
exports.getProductsForAdmin = async(req, res) => {
    try {
        const {id} = req.params;
        const allProducts = await Products.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
              where: {
                userId: id
              }
        });
        allProducts && res.status(200).send(allProducts) 
    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.');
    }
};
