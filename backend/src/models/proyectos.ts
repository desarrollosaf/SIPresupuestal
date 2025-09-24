import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { programas, programasId } from './programas';
import type { proyecto_unidades, proyecto_unidadesId } from './proyecto_unidades';
import type { solicituds, solicitudsId } from './solicituds';

export interface proyectosAttributes {
  id: number;
  clave: number;
  nombre: string;
  id_programas: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type proyectosPk = "id";
export type proyectosId = proyectos[proyectosPk];
export type proyectosOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type proyectosCreationAttributes = Optional<proyectosAttributes, proyectosOptionalAttributes>;

export class proyectos extends Model<proyectosAttributes, proyectosCreationAttributes> implements proyectosAttributes {
  id!: number;
  clave!: number;
  nombre!: string;
  id_programas!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // proyectos belongsTo programas via id_programas
  id_programas_programa!: programas;
  getId_programas_programa!: Sequelize.BelongsToGetAssociationMixin<programas>;
  setId_programas_programa!: Sequelize.BelongsToSetAssociationMixin<programas, programasId>;
  createId_programas_programa!: Sequelize.BelongsToCreateAssociationMixin<programas>;
  // proyectos hasMany proyecto_unidades via id_proyecto
  proyecto_unidades!: proyecto_unidades[];
  getProyecto_unidades!: Sequelize.HasManyGetAssociationsMixin<proyecto_unidades>;
  setProyecto_unidades!: Sequelize.HasManySetAssociationsMixin<proyecto_unidades, proyecto_unidadesId>;
  addProyecto_unidade!: Sequelize.HasManyAddAssociationMixin<proyecto_unidades, proyecto_unidadesId>;
  addProyecto_unidades!: Sequelize.HasManyAddAssociationsMixin<proyecto_unidades, proyecto_unidadesId>;
  createProyecto_unidade!: Sequelize.HasManyCreateAssociationMixin<proyecto_unidades>;
  removeProyecto_unidade!: Sequelize.HasManyRemoveAssociationMixin<proyecto_unidades, proyecto_unidadesId>;
  removeProyecto_unidades!: Sequelize.HasManyRemoveAssociationsMixin<proyecto_unidades, proyecto_unidadesId>;
  hasProyecto_unidade!: Sequelize.HasManyHasAssociationMixin<proyecto_unidades, proyecto_unidadesId>;
  hasProyecto_unidades!: Sequelize.HasManyHasAssociationsMixin<proyecto_unidades, proyecto_unidadesId>;
  countProyecto_unidades!: Sequelize.HasManyCountAssociationsMixin;
  // proyectos hasMany solicituds via id_proyecto
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

  static initModel(sequelize: Sequelize.Sequelize): typeof proyectos {
    return proyectos.init({
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
    id_programas: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'programas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'proyectos',
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
        name: "proyectos_id_programas_foreign",
        using: "BTREE",
        fields: [
          { name: "id_programas" },
        ]
      },
    ]
  });
  }
}
