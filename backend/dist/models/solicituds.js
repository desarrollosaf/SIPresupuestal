"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solicituds = void 0;
const sequelize_1 = require("sequelize");
class solicituds extends sequelize_1.Model {
    static initModel(sequelize) {
        return solicituds.init({
            id: {
                type: sequelize_1.DataTypes.CHAR(36),
                allowNull: false,
                primaryKey: true
            },
            id_solicitante: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            id_direccion: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            id_validador: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true
            },
            id_programatico_presupuestal: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'programatico_presupuestals',
                    key: 'id'
                }
            },
            id_cat_verificacion_solicituds: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            id_programa: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'programas',
                    key: 'id'
                }
            },
            id_proyecto: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'proyectos',
                    key: 'id'
                }
            },
            id_capitulo: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'capitulos',
                    key: 'id'
                }
            },
            rfc_beneficiario: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            tipo_beneficiario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            num_contrato: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            id_estatus: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'estatuses',
                    key: 'id'
                }
            },
            folio: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            importe: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: false
            },
            importe_letra: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            },
            fecha_solicitud: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            observaciones_validador: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            fecha_limite: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'solicituds',
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
                    name: "solicituds_id_programatico_presupuestal_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_programatico_presupuestal" },
                    ]
                },
                {
                    name: "solicituds_id_programa_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_programa" },
                    ]
                },
                {
                    name: "solicituds_id_proyecto_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_proyecto" },
                    ]
                },
                {
                    name: "solicituds_id_capitulo_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_capitulo" },
                    ]
                },
                {
                    name: "solicituds_id_estatus_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_estatus" },
                    ]
                },
            ]
        });
    }
}
exports.solicituds = solicituds;
