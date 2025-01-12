// Este archivo define el modelo Project, especificando los atributos y validaciones del proyecto. 
// Se recomienda utilizar un ORM como Sequelize para la implementación.

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de tener la configuración de la base de datos

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Asegúrate de que el modelo de usuarios esté definido
            key: 'id',
        },
    },
}, {
    tableName: 'projects',
    timestamps: true,
});

module.exports = Project;