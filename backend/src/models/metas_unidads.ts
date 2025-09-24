import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface metas_unidadsAttributes {
  id: number;
  unidad_administrativa: number;
  actividad: number;
  programa: number;
  proyecto: number;
  descripcion_meta: string;
  dependencia: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type metas_unidadsPk = "id";
export type metas_unidadsId = metas_unidads[metas_unidadsPk];
export type metas_unidadsOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type metas_unidadsCreationAttributes = Optional<metas_unidadsAttributes, metas_unidadsOptionalAttributes>;

export class metas_unidads extends Model<metas_unidadsAttributes, metas_unidadsCreationAttributes> implements metas_unidadsAttributes {
  id!: number;
  unidad_administrativa!: number;
  actividad!: number;
  programa!: number;
  proyecto!: number;
  descripcion_meta!: string;
  dependencia!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof metas_unidads {
    return metas_unidads.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    unidad_administrativa: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    actividad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    programa: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    proyecto: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    descripcion_meta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dependencia: {
      type: DataTypes.BIGINT.UNSIGNED,
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
