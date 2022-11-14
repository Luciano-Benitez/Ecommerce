const {Products} = require('../src/db');
const ProductData = require('../src/Utils/Products');


exports.getProducts = () => {
    try {
        ProductData.products.forEach(async (element) => {
            await Products.findOrCreate({
                where: {
                    name: element.name,
                    productType: element.productType,
                    price: element.price,
                    rating: element.rating,
                    image: [element.image],
                    description: element.description,
                    userId: element.userId
                }
            });
        });
    } catch (error) {
        console.log('Error:', error);
        return error;
    };
};