"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitulos = void 0;
const sequelize_1 = require("sequelize");
class capitulos extends sequelize_1.Model {
    static initModel(sequelize) {
        return capitulos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            clave: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'capitulos',
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
exports.capitulos = capitulos;
