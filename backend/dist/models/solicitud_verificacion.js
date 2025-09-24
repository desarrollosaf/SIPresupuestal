"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicitud_verificacion = void 0;
const sequelize_1 = require("sequelize");
class solicitud_verificacion extends sequelize_1.Model {
    static initModel(sequelize) {
        return solicitud_verificacion.init({
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
            id_verificacion: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'sub_verificacion_solicituds',
                    key: 'id'
                }
            },
            id_validador: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'solicitud_verificacion',
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
                    name: "solicitud_verificacion_id_solicitud_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_solicitud" },
                    ]
                },
                {
                    name: "solicitud_verificacion_id_verificacion_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_verificacion" },
                    ]
                },
            ]
        });
    }
}
exports.solicitud_verificacion = solicitud_verificacion;
