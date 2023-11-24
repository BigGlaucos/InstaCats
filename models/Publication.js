const {DataTypes} = require('sequelize');

const db = require('../db/conn')

const Publication = db.define('Publication',{
      
        Publication_id:{ 
             type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            require:true,
            primaryKey:true,
            autoIncrement:true
        },

        Publication_name:{ 
            type:DataTypes.STRING,
            allowNull:false,
            unique:false,
            require:true
        },

        Image:{ 
            type:DataTypes.STRING,
            unique:false,
            require:true
        },
        
       

});







module.exports = Publication;