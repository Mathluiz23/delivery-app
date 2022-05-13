module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    // underscored: true,
    tableName: 'salesProducts',
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
