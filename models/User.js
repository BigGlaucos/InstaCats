const {DataTypes} = require('sequelize');

const db = require('../db/conn')

const User = db.define('User',{
        
      user_id:{ 
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            require:true,
            primaryKey:true,
            autoIncrement:true
        },

    user_email:{ 
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            require:true
        },

          user_name:{ 
            type:DataTypes.STRING,
            allowNull:false,
            require:true
        }
        ,  user_password:{ 
            type:DataTypes.STRING,
            allowNull:false,
            require:true
        }

});

module.exports = User;