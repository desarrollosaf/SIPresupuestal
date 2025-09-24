import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { proyectos, proyectosId } from './proyectos';
import type { solicituds, solicitudsId } from './solicituds';

export interface programasAttributes {
  id: number;
  clave: string;
  nombre: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type programasPk = "id";
export type programasId = programas[programasPk];
export type programasOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type programasCreationAttributes = Optional<programasAttributes, programasOptionalAttributes>;

export class programas extends Model<programasAttributes, programasCreationAttributes> implements programasAttributes {
  id!: number;
  clave!: string;
  nombre!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // programas hasMany proyectos via id_programas
  proyectos!: proyectos[];
  getProyectos!: Sequelize.HasManyGetAssociationsMixin<proyectos>;
  setProyectos!: Sequelize.HasManySetAssociationsMixin<proyectos, proyectosId>;
  addProyecto!: Sequelize.HasManyAddAssociationMixin<proyectos, proyectosId>;
  addProyectos!: Sequelize.HasManyAddAssociationsMixin<proyectos, proyectosId>;
  createProyecto!: Sequelize.HasManyCreateAssociationMixin<proyectos>;
  removeProyecto!: Sequelize.HasManyRemoveAssociationMixin<proyectos, proyectosId>;
  removeProyectos!: Sequelize.HasManyRemoveAssociationsMixin<proyectos, proyectosId>;
  hasProyecto!: Sequelize.HasManyHasAssociationMixin<proyectos, proyectosId>;
  hasProyectos!: Sequelize.HasManyHasAssociationsMixin<proyectos, proyectosId>;
  countProyectos!: Sequelize.HasManyCountAssociationsMixin;
  // programas hasMany solicituds via id_programa
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

  static initModel(sequelize: Sequelize.Sequelize): typeof programas {
    return programas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    clave: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'programas',
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
