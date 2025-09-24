"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cat_verificacion_solicituds = void 0;
const sequelize_1 = require("sequelize");
class cat_verificacion_solicituds extends sequelize_1.Model {
    static initModel(sequelize) {
        return cat_verificacion_solicituds.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            id_programatico: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'cat_verificacion_solicituds',
            timestamps: true,
            paranoid: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.cat_verificacion_solicituds = cat_verificacion_solicituds;
