import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface fuente_financiamientosAttributes {
  id: number;
  nombre: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type fuente_financiamientosPk = "id";
export type fuente_financiamientosId = fuente_financiamientos[fuente_financiamientosPk];
export type fuente_financiamientosOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type fuente_financiamientosCreationAttributes = Optional<fuente_financiamientosAttributes, fuente_financiamientosOptionalAttributes>;

export class fuente_financiamientos extends Model<fuente_financiamientosAttributes, fuente_financiamientosCreationAttributes> implements fuente_financiamientosAttributes {
  id!: number;
  nombre!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof fuente_financiamientos {
    return fuente_financiamientos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fuente_financiamientos',
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
