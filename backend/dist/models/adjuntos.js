"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjuntos = void 0;
const sequelize_1 = require("sequelize");
class adjuntos extends sequelize_1.Model {
    static initModel(sequelize) {
        return adjuntos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            id_solicitud: {
                type: sequelize_1.DataTypes.CHAR(36),
                allowNull: false,
                references: {
                    model: 'solicituds',
                    key: 'id'
                }
            },
            file_adjunto: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'adjuntos',
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
                    name: "adjuntos_id_solicitud_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_solicitud" },
                    ]
                },
            ]
        });
    }
}
exports.adjuntos = adjuntos;
