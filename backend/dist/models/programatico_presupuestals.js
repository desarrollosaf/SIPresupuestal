"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programatico_presupuestals = void 0;
const sequelize_1 = require("sequelize");
class programatico_presupuestals extends sequelize_1.Model {
    static initModel(sequelize) {
        return programatico_presupuestals.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'programatico_presupuestals',
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
exports.programatico_presupuestals = programatico_presupuestals;
