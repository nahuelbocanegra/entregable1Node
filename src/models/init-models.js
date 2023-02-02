const DataTypes = require("sequelize").DataTypes;
const _Order = require("./Order");
const _ProductInCart = require("./ProductInCart");
const _ProductInOrder = require("./ProductInOrder");
const _cart = require("./cart");
const _product = require("./product");
const _users = require("./users");

function initModels(sequelize) {
  const Order = _Order(sequelize, DataTypes);
  const ProductInCart = _ProductInCart(sequelize, DataTypes);
  const ProductInOrder = _ProductInOrder(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  ProductInOrder.belongsTo(Order, { as: "order", foreignKey: "orderId"});
  Order.hasMany(ProductInOrder, { as: "ProductInOrders", foreignKey: "orderId"});
  ProductInCart.belongsTo(cart, { as: "cart", foreignKey: "cartId"});
  cart.hasMany(ProductInCart, { as: "ProductInCarts", foreignKey: "cartId"});
  ProductInCart.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(ProductInCart, { as: "ProductInCarts", foreignKey: "productId"});
  ProductInOrder.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(ProductInOrder, { as: "ProductInOrders", foreignKey: "productId"});
  Order.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(Order, { as: "Orders", foreignKey: "userId"});
  cart.belongsTo(users, { as: "id_user", foreignKey: "id"});
  users.hasOne(cart, { as: "cart", foreignKey: "id"});
  product.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(product, { as: "products", foreignKey: "userId"});

  return {
    Order,
    ProductInCart,
    ProductInOrder,
    cart,
    product,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
