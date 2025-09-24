import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';

export interface capitulosAttributes {
  id: number;
  clave: number;
  nombre: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type capitulosPk = "id";
export type capitulosId = capitulos[capitulosPk];
export type capitulosOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type capitulosCreationAttributes = Optional<capitulosAttributes, capitulosOptionalAttributes>;

export class capitulos extends Model<capitulosAttributes, capitulosCreationAttributes> implements capitulosAttributes {
  id!: number;
  clave!: number;
  nombre!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // capitulos hasMany solicituds via id_capitulo
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

  static initModel(sequelize: Sequelize.Sequelize): typeof capitulos {
    return capitulos.init({
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
    }
  }, {
    sequelize,
    tableName: 'capitulos',
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
