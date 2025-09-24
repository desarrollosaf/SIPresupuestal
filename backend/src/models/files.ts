import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';

export interface filesAttributes {
  id: number;
  id_solicitud: string;
  filepdf?: string;
  tipo?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type filesPk = "id";
export type filesId = files[filesPk];
export type filesOptionalAttributes = "id" | "filepdf" | "tipo" | "created_at" | "updated_at" | "deleted_at";
export type filesCreationAttributes = Optional<filesAttributes, filesOptionalAttributes>;

export class files extends Model<filesAttributes, filesCreationAttributes> implements filesAttributes {
  id!: number;
  id_solicitud!: string;
  filepdf?: string;
  tipo?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // files belongsTo solicituds via id_solicitud
  id_solicitud_solicitud!: solicituds;
  getId_solicitud_solicitud!: Sequelize.BelongsToGetAssociationMixin<solicituds>;
  setId_solicitud_solicitud!: Sequelize.BelongsToSetAssociationMixin<solicituds, solicitudsId>;
  createId_solicitud_solicitud!: Sequelize.BelongsToCreateAssociationMixin<solicituds>;

  static initModel(sequelize: Sequelize.Sequelize): typeof files {
    return files.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_solicitud: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'solicituds',
        key: 'id'
      }
    },
    filepdf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(255),
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
