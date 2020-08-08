const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Product extends Model {
  static init(sequelize) {
    //model에 init을 호출해야
    return super.init(
      {
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        price: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        modelName: "Product",
        tableName: "products",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //한글임티 저장
        sequelize, //연결 객체
      }
    );
  }
  static associate(db) {}
};
