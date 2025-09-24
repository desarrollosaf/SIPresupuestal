import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';

export interface programatico_presupuestalsAttributes {
  id: number;
  nombre: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type programatico_presupuestalsPk = "id";
export type programatico_presupuestalsId = programatico_presupuestals[programatico_presupuestalsPk];
export type programatico_presupuestalsOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type programatico_presupuestalsCreationAttributes = Optional<programatico_presupuestalsAttributes, programatico_presupuestalsOptionalAttributes>;

export class programatico_presupuestals extends Model<programatico_presupuestalsAttributes, programatico_presupuestalsCreationAttributes> implements programatico_presupuestalsAttributes {
  id!: number;
  nombre!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // programatico_presupuestals hasMany solicituds via id_programatico_presupuestal
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

  static initModel(sequelize: Sequelize.Sequelize): typeof programatico_presupuestals {
    return programatico_presupuestals.init({
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
    tableName: 'programatico_presupuestals',
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
