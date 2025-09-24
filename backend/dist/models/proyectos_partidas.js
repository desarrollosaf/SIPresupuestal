"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectos_partidas = void 0;
const sequelize_1 = require("sequelize");
class proyectos_partidas extends sequelize_1.Model {
    static initModel(sequelize) {
        return proyectos_partidas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            proyecto: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            centro_de_costo: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            id_fuente_financiamientos: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            capitulo: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            partida: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'proyectos_partidas',
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
exports.proyectos_partidas = proyectos_partidas;
