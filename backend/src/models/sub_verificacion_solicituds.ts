import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicitud_verificacion, solicitud_verificacionId } from './solicitud_verificacion';

export interface sub_verificacion_solicitudsAttributes {
  id: number;
  nombre: string;
  id_cat_verificacion_solicituds: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type sub_verificacion_solicitudsPk = "id";
export type sub_verificacion_solicitudsId = sub_verificacion_solicituds[sub_verificacion_solicitudsPk];
export type sub_verificacion_solicitudsOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type sub_verificacion_solicitudsCreationAttributes = Optional<sub_verificacion_solicitudsAttributes, sub_verificacion_solicitudsOptionalAttributes>;

export class sub_verificacion_solicituds extends Model<sub_verificacion_solicitudsAttributes, sub_verificacion_solicitudsCreationAttributes> implements sub_verificacion_solicitudsAttributes {
  id!: number;
  nombre!: string;
  id_cat_verificacion_solicituds!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // sub_verificacion_solicituds hasMany solicitud_verificacion via id_verificacion
  solicitud_verificacions!: solicitud_verificacion[];
  getSolicitud_verificacions!: Sequelize.HasManyGetAssociationsMixin<solicitud_verificacion>;
  setSolicitud_verificacions!: Sequelize.HasManySetAssociationsMixin<solicitud_verificacion, solicitud_verificacionId>;
  addSolicitud_verificacion!: Sequelize.HasManyAddAssociationMixin<solicitud_verificacion, solicitud_verificacionId>;
  addSolicitud_verificacions!: Sequelize.HasManyAddAssociationsMixin<solicitud_verificacion, solicitud_verificacionId>;
  createSolicitud_verificacion!: Sequelize.HasManyCreateAssociationMixin<solicitud_verificacion>;
  removeSolicitud_verificacion!: Sequelize.HasManyRemoveAssociationMixin<solicitud_verificacion, solicitud_verificacionId>;
  removeSolicitud_verificacions!: Sequelize.HasManyRemoveAssociationsMixin<solicitud_verificacion, solicitud_verificacionId>;
  hasSolicitud_verificacion!: Sequelize.HasManyHasAssociationMixin<solicitud_verificacion, solicitud_verificacionId>;
  hasSolicitud_verificacions!: Sequelize.HasManyHasAssociationsMixin<solicitud_verificacion, solicitud_verificacionId>;
  countSolicitud_verificacions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sub_verificacion_solicituds {
    return sub_verificacion_solicituds.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_cat_verificacion_solicituds: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sub_verificacion_solicituds',
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
