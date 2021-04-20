const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        movie_id: {
            type: DataTypes.INTEGER,
        },   
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 10,
                min: 1,
            },
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlphanumeric: true, //this will exclude exclamation marks and such.  do we want to include?
            },
        },
    },
    {
        sequelize,
        timestamps: true, 
        freezeTableName: true,
        underscored: true,
        modelName: 'review',    
    }
);