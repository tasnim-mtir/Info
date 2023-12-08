'use strict';
import {Model} from 'sequelize';
const createUserModel = (sequelize, DataTypes) => {
    class user extends Model {
  
    static associate(models) {
    }
  }
  user.init({
    encrypted_id: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    
  
    },
     {
    sequelize,
    modelName: 'user',
  });
  return user;
};
export default createUserModel;
