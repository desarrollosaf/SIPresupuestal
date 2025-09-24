"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectos = void 0;
const sequelize_1 = require("sequelize");
class proyectos extends sequelize_1.Model {
    static initModel(sequelize) {
        return proyectos.init({
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
            id_programas: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'programas',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'proyectos',
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
                {
                    name: "proyectos_id_programas_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_programas" },
                    ]
                },
            ]
        });
    }
}
exports.proyectos = proyectos;
