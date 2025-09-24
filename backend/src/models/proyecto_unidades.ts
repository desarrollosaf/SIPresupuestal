import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { proyectos, proyectosId } from './proyectos';

export interface proyecto_unidadesAttributes {
  id: number;
  id_proyecto: number;
  direccion: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type proyecto_unidadesPk = "id";
export type proyecto_unidadesId = proyecto_unidades[proyecto_unidadesPk];
export type proyecto_unidadesOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type proyecto_unidadesCreationAttributes = Optional<proyecto_unidadesAttributes, proyecto_unidadesOptionalAttributes>;

export class proyecto_unidades extends Model<proyecto_unidadesAttributes, proyecto_unidadesCreationAttributes> implements proyecto_unidadesAttributes {
  id!: number;
  id_proyecto!: number;
  direccion!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // proyecto_unidades belongsTo proyectos via id_proyecto
  id_proyecto_proyecto!: proyectos;
  getId_proyecto_proyecto!: Sequelize.BelongsToGetAssociationMixin<proyectos>;
  setId_proyecto_proyecto!: Sequelize.BelongsToSetAssociationMixin<proyectos, proyectosId>;
  createId_proyecto_proyecto!: Sequelize.BelongsToCreateAssociationMixin<proyectos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof proyecto_unidades {
    return proyecto_unidades.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_proyecto: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'proyectos',
        key: 'id'
      }
    },
    direccion: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proyecto_unidades',
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
        name: "proyecto_unidades_id_proyecto_foreign",
        using: "BTREE",
        fields: [
          { name: "id_proyecto" },
        ]
      },
    ]
  });
  }
}
