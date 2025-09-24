import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';

export interface estatusesAttributes {
  id: number;
  nombre: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type estatusesPk = "id";
export type estatusesId = estatuses[estatusesPk];
export type estatusesOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type estatusesCreationAttributes = Optional<estatusesAttributes, estatusesOptionalAttributes>;

export class estatuses extends Model<estatusesAttributes, estatusesCreationAttributes> implements estatusesAttributes {
  id!: number;
  nombre!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // estatuses hasMany solicituds via id_estatus
  solicituds!: solicituds[];
  getSolicituds!: Sequelize.HasManyGetAssociationsMixin<solicituds>;
  setSolicituds!: Sequelize.HasManySetAssociationsMixin<solicituds, solicitudsId>;
  addSolicitud!: Sequelize.HasManyAddAssociationMixin<solicituds, solicitudsId>;
  addSolicituds!: Sequelize.HasManyAddAssociationsMixin<solicituds, solicitudsId>;
  createSolicitud!: Sequelize.HasManyCreateAssociationMixin<solicituds>;
  removeSolicitud!: Sequelize.HasManyRemoveAssociationMixin<solicituds, solicitudsId>;
  removeSolicituds!: Sequelize.HasManyRemoveAssociationsMixin<solicituds, solicitudsId>;
  hasSolicitud!: Sequelize.HasManyHasAssociationMixin<solicituds, solicitudsId>;
  hasSolicituds!: Sequelize.HasManyHasAssociationsMixin<solicituds, solicitudsId>;
  countSolicituds!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof estatuses {
    return estatuses.init({
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
    tableName: 'estatuses',
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
