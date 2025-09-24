import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cat_verificacion_solicitudsAttributes {
  id: number;
  nombre: string;
  id_programatico: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type cat_verificacion_solicitudsPk = "id";
export type cat_verificacion_solicitudsId = cat_verificacion_solicituds[cat_verificacion_solicitudsPk];
export type cat_verificacion_solicitudsOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type cat_verificacion_solicitudsCreationAttributes = Optional<cat_verificacion_solicitudsAttributes, cat_verificacion_solicitudsOptionalAttributes>;

export class cat_verificacion_solicituds extends Model<cat_verificacion_solicitudsAttributes, cat_verificacion_solicitudsCreationAttributes> implements cat_verificacion_solicitudsAttributes {
  id!: number;
  nombre!: string;
  id_programatico!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof cat_verificacion_solicituds {
    return cat_verificacion_solicituds.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_programatico: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cat_verificacion_solicituds',
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
