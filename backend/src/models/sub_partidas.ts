import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicitud_facturas, solicitud_facturasId } from './solicitud_facturas';

export interface sub_partidasAttributes {
  id: number;
  clave: number;
  nombre: string;
  descripcion: string;
  partida: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type sub_partidasPk = "id";
export type sub_partidasId = sub_partidas[sub_partidasPk];
export type sub_partidasOptionalAttributes = "id" | "created_at" | "updated_at" | "deleted_at";
export type sub_partidasCreationAttributes = Optional<sub_partidasAttributes, sub_partidasOptionalAttributes>;

export class sub_partidas extends Model<sub_partidasAttributes, sub_partidasCreationAttributes> implements sub_partidasAttributes {
  id!: number;
  clave!: number;
  nombre!: string;
  descripcion!: string;
  partida!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // sub_partidas hasMany solicitud_facturas via id_subpartida
  solicitud_facturas!: solicitud_facturas[];
  getSolicitud_facturas!: Sequelize.HasManyGetAssociationsMixin<solicitud_facturas>;
  setSolicitud_facturas!: Sequelize.HasManySetAssociationsMixin<solicitud_facturas, solicitud_facturasId>;
  addSolicitud_factura!: Sequelize.HasManyAddAssociationMixin<solicitud_facturas, solicitud_facturasId>;
  addSolicitud_facturas!: Sequelize.HasManyAddAssociationsMixin<solicitud_facturas, solicitud_facturasId>;
  createSolicitud_factura!: Sequelize.HasManyCreateAssociationMixin<solicitud_facturas>;
  removeSolicitud_factura!: Sequelize.HasManyRemoveAssociationMixin<solicitud_facturas, solicitud_facturasId>;
  removeSolicitud_facturas!: Sequelize.HasManyRemoveAssociationsMixin<solicitud_facturas, solicitud_facturasId>;
  hasSolicitud_factura!: Sequelize.HasManyHasAssociationMixin<solicitud_facturas, solicitud_facturasId>;
  hasSolicitud_facturas!: Sequelize.HasManyHasAssociationsMixin<solicitud_facturas, solicitud_facturasId>;
  countSolicitud_facturas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sub_partidas {
    return sub_partidas.init({
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
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    partida: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sub_partidas',
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
