const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    //model에 init을 호출해야
    return super.init(
      {
        // MySQL에서는 users 테이블 생성
        //엑셀에 적어준다 생각하고
        // id: {}, //id는 고유한 값을 주는데 mysql에서 자동으로 넣어주기때문에 안넣어주도됨
        email: {
          //데이터 : 가로줄 : 로우
          type: DataTypes.STRING(30), //STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, //필수
          unique: true, //고유한 값
        }, //세로줄 : 컬럼
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //한글임티 저장
        sequelize, //연결 객체
      }
    );
  }
  static associate(db) {}
};
