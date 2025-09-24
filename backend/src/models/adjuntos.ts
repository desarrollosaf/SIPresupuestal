import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';

export interface adjuntosAttributes {
  id: number;
  id_solicitud: string;
  file_adjunto?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type adjuntosPk = "id";
export type adjuntosId = adjuntos[adjuntosPk];
export type adjuntosOptionalAttributes = "id" | "file_adjunto" | "created_at" | "updated_at" | "deleted_at";
export type adjuntosCreationAttributes = Optional<adjuntosAttributes, adjuntosOptionalAttributes>;

export class adjuntos extends Model<adjuntosAttributes, adjuntosCreationAttributes> implements adjuntosAttributes {
  id!: number;
  id_solicitud!: string;
  file_adjunto?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // adjuntos belongsTo solicituds via id_solicitud
  id_solicitud_solicitud!: solicituds;
  getId_solicitud_solicitud!: Sequelize.BelongsToGetAssociationMixin<solicituds>;
  setId_solicitud_solicitud!: Sequelize.BelongsToSetAssociationMixin<solicituds, solicitudsId>;
  createId_solicitud_solicitud!: Sequelize.BelongsToCreateAssociationMixin<solicituds>;

  static initModel(sequelize: Sequelize.Sequelize): typeof adjuntos {
    return adjuntos.init({
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
    file_adjunto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'adjuntos',
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
        name: "adjuntos_id_solicitud_foreign",
        using: "BTREE",
        fields: [
          { name: "id_solicitud" },
        ]
      },
    ]
  });
  }
}
