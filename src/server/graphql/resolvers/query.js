const products = require('../../../../resources/products.json');

const queryResolvers = {
    Query:{
        products: ()=>products,

        product:(_, {id}) => {
            return products.find(product => product.id === id);
        }
    }
}

module.exports = queryResolvers;