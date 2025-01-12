
const productResolvers = {
    Product: {
      // Resolve nested manufacturer details if necessary
      manufacturer: (parent) => parent.manufacturer,
    },
  };
  
  module.exports = productResolvers;

