import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface foliosAttributes {
  id: number;
  folio: string;
  tipo: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type foliosPk = "id";
export type foliosId = folios[foliosPk];
export type foliosOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type foliosCreationAttributes = Optional<foliosAttributes, foliosOptionalAttributes>;

export class folios extends Model<foliosAttributes, foliosCreationAttributes> implements foliosAttributes {
  id!: number;
  folio!: string;
  tipo!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof folios {
    return folios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    folio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'folios',
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
