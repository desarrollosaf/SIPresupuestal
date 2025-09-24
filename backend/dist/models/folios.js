"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folios = void 0;
const sequelize_1 = require("sequelize");
class folios extends sequelize_1.Model {
    static initModel(sequelize) {
        return folios.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            folio: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            tipo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'folios',
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
exports.folios = folios;
