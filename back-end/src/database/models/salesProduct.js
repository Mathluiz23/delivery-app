module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'salesProduct',
  });

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SalesProduct;
}
