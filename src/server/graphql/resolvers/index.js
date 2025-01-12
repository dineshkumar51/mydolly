const queryResolvers = require('./query');
const productResolvers = require('./product');

module.exports = {
  ...queryResolvers,
  ...productResolvers,
};