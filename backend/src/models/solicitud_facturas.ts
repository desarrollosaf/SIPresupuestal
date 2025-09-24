import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { solicituds, solicitudsId } from './solicituds';
import type { sub_partidas, sub_partidasId } from './sub_partidas';

export interface solicitud_facturasAttributes {
  id: number;
  id_solicitud: string;
  clave_presupuestal: string;
  id_actividad?: number;
  id_subpartida: number;
  importeGP: number;
  rfc_emisor?: string;
  nombre_emisor?: string;
  concepto_gasto?: string;
  folio_factura?: string;
  factura_extranjera?: string;
  tax_id?: string;
  pais?: string;
  filepdf?: string;
  filexml?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type solicitud_facturasPk = "id";
export type solicitud_facturasId = solicitud_facturas[solicitud_facturasPk];
export type solicitud_facturasOptionalAttributes = "id" | "id_actividad" | "rfc_emisor" | "nombre_emisor" | "concepto_gasto" | "folio_factura" | "factura_extranjera" | "tax_id" | "pais" | "filepdf" | "filexml" | "created_at" | "updated_at" | "deleted_at";
export type solicitud_facturasCreationAttributes = Optional<solicitud_facturasAttributes, solicitud_facturasOptionalAttributes>;

export class solicitud_facturas extends Model<solicitud_facturasAttributes, solicitud_facturasCreationAttributes> implements solicitud_facturasAttributes {
  id!: number;
  id_solicitud!: string;
  clave_presupuestal!: string;
  id_actividad?: number;
  id_subpartida!: number;
  importeGP!: number;
  rfc_emisor?: string;
  nombre_emisor?: string;
  concepto_gasto?: string;
  folio_factura?: string;
  factura_extranjera?: string;
  tax_id?: string;
  pais?: string;
  filepdf?: string;
  filexml?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // solicitud_facturas belongsTo solicituds via id_solicitud
  id_solicitud_solicitud!: solicituds;
  getId_solicitud_solicitud!: Sequelize.BelongsToGetAssociationMixin<solicituds>;
  setId_solicitud_solicitud!: Sequelize.BelongsToSetAssociationMixin<solicituds, solicitudsId>;
  createId_solicitud_solicitud!: Sequelize.BelongsToCreateAssociationMixin<solicituds>;
  // solicitud_facturas belongsTo sub_partidas via id_subpartida
  id_subpartida_sub_partida!: sub_partidas;
  getId_subpartida_sub_partida!: Sequelize.BelongsToGetAssociationMixin<sub_partidas>;
  setId_subpartida_sub_partida!: Sequelize.BelongsToSetAssociationMixin<sub_partidas, sub_partidasId>;
  createId_subpartida_sub_partida!: Sequelize.BelongsToCreateAssociationMixin<sub_partidas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof solicitud_facturas {
    return solicitud_facturas.init({
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
    clave_presupuestal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_actividad: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    id_subpartida: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sub_partidas',
        key: 'id'
      }
    },
    importeGP: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rfc_emisor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre_emisor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    concepto_gasto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    folio_factura: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    factura_extranjera: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filepdf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filexml: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'solicitud_facturas',
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
        name: "solicitud_facturas_id_solicitud_foreign",
        using: "BTREE",
        fields: [
          { name: "id_solicitud" },
        ]
      },
      {
        name: "solicitud_facturas_id_subpartida_foreign",
        using: "BTREE",
        fields: [
          { name: "id_subpartida" },
        ]
      },
    ]
  });
  }
}
