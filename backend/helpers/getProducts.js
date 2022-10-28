const {Products} = require('../src/db');
const ProductData = require('../src/Utils/Products');

exports.getProducts = () => {
    try {
        ProductData.products.forEach(async (element) => {
            await Products.findOrCreate({
                where: {
                    id: element.id,
                    name: element.name,
                    productType: element.productType,
                    price: element.price,
                    rating: element.rating,
                    image: [element.image[0]],
                    description: element.description
                }
            });
        });
    } catch (error) {
        console.log('Error:', error);
        return error;
    }
};