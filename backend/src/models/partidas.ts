import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface partidasAttributes {
  id: number;
  clave: number;
  nombre: string;
  descripcion: string;
  capitulo: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type partidasPk = "id";
export type partidasId = partidas[partidasPk];
export type partidasOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type partidasCreationAttributes = Optional<partidasAttributes, partidasOptionalAttributes>;

export class partidas extends Model<partidasAttributes, partidasCreationAttributes> implements partidasAttributes {
  id!: number;
  clave!: number;
  nombre!: string;
  descripcion!: string;
  capitulo!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof partidas {
    return partidas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    clave: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    capitulo: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'partidas',
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
