import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedoresAttributes {
  id: number;
  rfc: string;
  nombre: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type proveedoresPk = "id";
export type proveedoresId = proveedores[proveedoresPk];
export type proveedoresOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type proveedoresCreationAttributes = Optional<proveedoresAttributes, proveedoresOptionalAttributes>;

export class proveedores extends Model<proveedoresAttributes, proveedoresCreationAttributes> implements proveedoresAttributes {
  id!: number;
  rfc!: string;
  nombre!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedores {
    return proveedores.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rfc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedores',
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
