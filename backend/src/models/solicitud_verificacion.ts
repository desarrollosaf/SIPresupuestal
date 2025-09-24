import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';
import type { sub_verificacion_solicituds, sub_verificacion_solicitudsId } from './sub_verificacion_solicituds';

export interface solicitud_verificacionAttributes {
  id: number;
  id_solicitud: string;
  id_verificacion: number;
  id_validador?: number;
  estado?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type solicitud_verificacionPk = "id";
export type solicitud_verificacionId = solicitud_verificacion[solicitud_verificacionPk];
export type solicitud_verificacionOptionalAttributes = "id" | "id_validador" | "estado" | "created_at" | "updated_at" | "deleted_at";
export type solicitud_verificacionCreationAttributes = Optional<solicitud_verificacionAttributes, solicitud_verificacionOptionalAttributes>;

export class solicitud_verificacion extends Model<solicitud_verificacionAttributes, solicitud_verificacionCreationAttributes> implements solicitud_verificacionAttributes {
  id!: number;
  id_solicitud!: string;
  id_verificacion!: number;
  id_validador?: number;
  estado?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // solicitud_verificacion belongsTo solicituds via id_solicitud
  id_solicitud_solicitud!: solicituds;
  getId_solicitud_solicitud!: Sequelize.BelongsToGetAssociationMixin<solicituds>;
  setId_solicitud_solicitud!: Sequelize.BelongsToSetAssociationMixin<solicituds, solicitudsId>;
  createId_solicitud_solicitud!: Sequelize.BelongsToCreateAssociationMixin<solicituds>;
  // solicitud_verificacion belongsTo sub_verificacion_solicituds via id_verificacion
  id_verificacion_sub_verificacion_solicitud!: sub_verificacion_solicituds;
  getId_verificacion_sub_verificacion_solicitud!: Sequelize.BelongsToGetAssociationMixin<sub_verificacion_solicituds>;
  setId_verificacion_sub_verificacion_solicitud!: Sequelize.BelongsToSetAssociationMixin<sub_verificacion_solicituds, sub_verificacion_solicitudsId>;
  createId_verificacion_sub_verificacion_solicitud!: Sequelize.BelongsToCreateAssociationMixin<sub_verificacion_solicituds>;

  static initModel(sequelize: Sequelize.Sequelize): typeof solicitud_verificacion {
    return solicitud_verificacion.init({
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
    id_verificacion: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sub_verificacion_solicituds',
        key: 'id'
      }
    },
    id_validador: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'solicitud_verificacion',
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
        name: "solicitud_verificacion_id_solicitud_foreign",
        using: "BTREE",
        fields: [
          { name: "id_solicitud" },
        ]
      },
      {
        name: "solicitud_verificacion_id_verificacion_foreign",
        using: "BTREE",
        fields: [
          { name: "id_verificacion" },
        ]
      },
    ]
  });
  }
}
