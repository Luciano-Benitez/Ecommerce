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

exports.getProductForID = async (req, res = response) => {
    try {
        const {id} = req.params;
        const result = await Products.findByPk(id.toUpperCase(),{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        result !== undefined ? res.status(200).json(result): 
        res.status(404).json({msg:'Product search error.'});
    } catch (error) {
        res.json(error);
        console.log('Error:', error);
    }
};

exports.putNameProduct = async (req, res = response) => {
    try {
        const {id, name} = req.body;
        const result = await Products.update({
            name: name
        },
        {
            where: {id: id}
        });
        const newName = await Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        });

        result !== undefined ? res.status(200).json({ok:true, newName}) :
        res.status(404).json({ok:false});
    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    };
};

exports.putProductType = async (req, res = response) => {
    try {
        const {id, newType} = req.body;
        const result = await Products.update({
            productType: newType
        },
        {
            where: {id: id}
        });
        const newProductType = await Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        });

        result !== undefined ? res.status(200).json({ok:true, newProductType}) :
        res.status(404).json({ok:false});
    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    }
};

exports.putPriceProduct = async (req, res = response) => {
    try {
        const {id, newPrice} = req.body;
        const result = await Products.update({
            price: newPrice
        },{
            where:{id: id}
        });
        const newProduct = await Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        result !== undefined ? res.status(200).json({ok:true, newProduct}) : 
        res.status(404).json({ok:false});

    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    };
};

exports.putRatingProduct = async (req, res = response) => {
    try {
        const {id, newRating} = req.body;
        const result = await Products.update({
            rating: newRating
        },
        {
            where: {id: id}
        });
        const newProduct = await Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        result !== undefined ? res.status(200).json({ok: true, newProduct}) : 
        res.status(404).json({ok: false});
    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    }
};

exports.putDescriptionProduct = async (req, res = response) => {
    try {
        const {id, newDescription} = req.body;
        const result = await Products.update({
            description: newDescription
        },
        {
            where: {id: id}
        });
        const newProduct = await Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        result !== undefined ? res.status(200).json({ok:true, newProduct}) : 
        res.status(404).json({ok:false});
    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    }
};

exports.putImageProduct = async (req, res = response) => {
    try {
        const {id, newImage} = req.body;
        const result = await Products.update({
            image: [newImage]
        },{
            where: {id: id}
        });
        const newProduct = await Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        result !== undefined ? res.status(200).json({ok: true, newProduct}) :
        res.status(404).json({ok: false}); 
    } catch (error) {
        console.log('Error:', error);
        res.json(error);
    }
};