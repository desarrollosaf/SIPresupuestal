"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metas_unidads = void 0;
const sequelize_1 = require("sequelize");
class metas_unidads extends sequelize_1.Model {
    static initModel(sequelize) {
        return metas_unidads.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            unidad_administrativa: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },
            actividad: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            programa: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            proyecto: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            descripcion_meta: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            dependencia: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'metas_unidads',
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
exports.metas_unidads = metas_unidads;
