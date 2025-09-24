"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyecto_unidades = void 0;
const sequelize_1 = require("sequelize");
class proyecto_unidades extends sequelize_1.Model {
    static initModel(sequelize) {
        return proyecto_unidades.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            id_proyecto: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'proyectos',
                    key: 'id'
                }
            },
            direccion: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'proyecto_unidades',
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
                    name: "proyecto_unidades_id_proyecto_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_proyecto" },
                    ]
                },
            ]
        });
    }
}
exports.proyecto_unidades = proyecto_unidades;
