"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.files = void 0;
const sequelize_1 = require("sequelize");
class files extends sequelize_1.Model {
    static initModel(sequelize) {
        return files.init({
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
            filepdf: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'files',
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
                    name: "files_id_solicitud_foreign",
                    using: "BTREE",
                    fields: [
                        { name: "id_solicitud" },
                    ]
                },
            ]
        });
    }
}
exports.files = files;
