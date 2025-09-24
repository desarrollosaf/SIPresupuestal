"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub_verificacion_solicituds = void 0;
const sequelize_1 = require("sequelize");
class sub_verificacion_solicituds extends sequelize_1.Model {
    static initModel(sequelize) {
        return sub_verificacion_solicituds.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            id_cat_verificacion_solicituds: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'sub_verificacion_solicituds',
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
exports.sub_verificacion_solicituds = sub_verificacion_solicituds;
