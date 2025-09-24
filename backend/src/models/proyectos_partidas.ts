import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proyectos_partidasAttributes {
  id: number;
  proyecto: number;
  centro_de_costo: string;
  id_fuente_financiamientos: number;
  capitulo: number;
  partida: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type proyectos_partidasPk = "id";
export type proyectos_partidasId = proyectos_partidas[proyectos_partidasPk];
export type proyectos_partidasOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type proyectos_partidasCreationAttributes = Optional<proyectos_partidasAttributes, proyectos_partidasOptionalAttributes>;

export class proyectos_partidas extends Model<proyectos_partidasAttributes, proyectos_partidasCreationAttributes> implements proyectos_partidasAttributes {
  id!: number;
  proyecto!: number;
  centro_de_costo!: string;
  id_fuente_financiamientos!: number;
  capitulo!: number;
  partida!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof proyectos_partidas {
    return proyectos_partidas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    proyecto: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    centro_de_costo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_fuente_financiamientos: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    capitulo: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    partida: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proyectos_partidas',
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
