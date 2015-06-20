'use strict';
var Sequelize = require('sequelize');
var DataTypes = Sequelize;

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'test',
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: DataTypes.DATE
                },
                updatedAt: {
                    type: DataTypes.DATE
                },
                attr1: DataTypes.STRING,
                attr2: DataTypes.INTEGER,
                attr3: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                    allowNull: false
                }
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('test');
    }
};
