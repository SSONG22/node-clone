const Sequelize = require("sequelize");
const user = require("./user");

const env = process.env.NODE_ENV || "development"; //||기본값
const config = require("../config/config")[env]; //development 를 가져와라
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = user;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});
//assoiciate 연결
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
