module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'salesProduct',
  });

  SalesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sale',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });

    models.sale.belongsToMany(models.product, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SalesProduct;
}
