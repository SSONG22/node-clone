const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    //model에 init을 호출해야
    return super.init(
      {
        token: {
          type: DataTypes.STRING(100),
          allowNull: true,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
      },
      {
        modelName: "Auth",
        tableName: "auths",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //한글임티 저장
        sequelize,
      }
    );
  }
  static associate(db) {}
};
