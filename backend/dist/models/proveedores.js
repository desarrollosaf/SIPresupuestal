"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedores = void 0;
const sequelize_1 = require("sequelize");
class proveedores extends sequelize_1.Model {
    static initModel(sequelize) {
        return proveedores.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            rfc: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'proveedores',
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
exports.proveedores = proveedores;
