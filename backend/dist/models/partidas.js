"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partidas = void 0;
const sequelize_1 = require("sequelize");
class partidas extends sequelize_1.Model {
    static initModel(sequelize) {
        return partidas.init({
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
            },
            descripcion: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            capitulo: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'partidas',
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
exports.partidas = partidas;
