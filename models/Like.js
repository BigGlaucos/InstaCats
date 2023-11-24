const {DataTypes} = require('sequelize');

const User = require('./User')

const Publication = require('./Publication')

const db = require('../db/conn')

const Like = db.define('Like',{});

Like.belongsTo(User)
Like.belongsTo(Publication)

User.hasMany(Like)
Publication.hasMany(Like)

module.exports = Like;