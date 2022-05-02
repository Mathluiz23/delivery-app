module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    urlImage: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'products'
  });

  return Product;
}
