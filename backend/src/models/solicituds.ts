import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { adjuntos, adjuntosId } from './adjuntos';
import type { capitulos, capitulosId } from './capitulos';
import type { estatuses, estatusesId } from './estatuses';
import type { files, filesId } from './files';
import type { programas, programasId } from './programas';
import type { programatico_presupuestals, programatico_presupuestalsId } from './programatico_presupuestals';
import type { proyectos, proyectosId } from './proyectos';
import type { solicitud_facturas, solicitud_facturasId } from './solicitud_facturas';
import type { solicitud_verificacion, solicitud_verificacionId } from './solicitud_verificacion';

export interface solicitudsAttributes {
  id: string;
  id_solicitante?: string;
  id_direccion?: number;
  id_validador?: number;
  id_programatico_presupuestal: number;
  id_cat_verificacion_solicituds: number;
  id_programa: number;
  id_proyecto: number;
  id_capitulo?: number;
  rfc_beneficiario: string;
  tipo_beneficiario: number;
  num_contrato?: string;
  id_estatus: number;
  folio: string;
  importe: number;
  importe_letra: string;
  fecha_solicitud: string;
  observaciones?: string;
  observaciones_validador?: string;
  fecha_limite?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type solicitudsPk = "id";
export type solicitudsId = solicituds[solicitudsPk];
export type solicitudsOptionalAttributes = "id_solicitante" | "id_direccion" | "id_validador" | "id_capitulo" | "num_contrato" | "observaciones" | "observaciones_validador" | "fecha_limite" | "created_at" | "updated_at" | "deleted_at";
export type solicitudsCreationAttributes = Optional<solicitudsAttributes, solicitudsOptionalAttributes>;

export class solicituds extends Model<solicitudsAttributes, solicitudsCreationAttributes> implements solicitudsAttributes {
  id!: string;
  id_solicitante?: string;
  id_direccion?: number;
  id_validador?: number;
  id_programatico_presupuestal!: number;
  id_cat_verificacion_solicituds!: number;
  id_programa!: number;
  id_proyecto!: number;
  id_capitulo?: number;
  rfc_beneficiario!: string;
  tipo_beneficiario!: number;
  num_contrato?: string;
  id_estatus!: number;
  folio!: string;
  importe!: number;
  importe_letra!: string;
  fecha_solicitud!: string;
  observaciones?: string;
  observaciones_validador?: string;
  fecha_limite?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // solicituds belongsTo capitulos via id_capitulo
  id_capitulo_capitulo!: capitulos;
  getId_capitulo_capitulo!: Sequelize.BelongsToGetAssociationMixin<capitulos>;
  setId_capitulo_capitulo!: Sequelize.BelongsToSetAssociationMixin<capitulos, capitulosId>;
  createId_capitulo_capitulo!: Sequelize.BelongsToCreateAssociationMixin<capitulos>;
  // solicituds belongsTo estatuses via id_estatus
  id_estatus_estatus!: estatuses;
  getId_estatus_estatus!: Sequelize.BelongsToGetAssociationMixin<estatuses>;
  setId_estatus_estatus!: Sequelize.BelongsToSetAssociationMixin<estatuses, estatusesId>;
  createId_estatus_estatus!: Sequelize.BelongsToCreateAssociationMixin<estatuses>;
  // solicituds belongsTo programas via id_programa
  id_programa_programa!: programas;
  getId_programa_programa!: Sequelize.BelongsToGetAssociationMixin<programas>;
  setId_programa_programa!: Sequelize.BelongsToSetAssociationMixin<programas, programasId>;
  createId_programa_programa!: Sequelize.BelongsToCreateAssociationMixin<programas>;
  // solicituds belongsTo programatico_presupuestals via id_programatico_presupuestal
  id_programatico_presupuestal_programatico_presupuestal!: programatico_presupuestals;
  getId_programatico_presupuestal_programatico_presupuestal!: Sequelize.BelongsToGetAssociationMixin<programatico_presupuestals>;
  setId_programatico_presupuestal_programatico_presupuestal!: Sequelize.BelongsToSetAssociationMixin<programatico_presupuestals, programatico_presupuestalsId>;
  createId_programatico_presupuestal_programatico_presupuestal!: Sequelize.BelongsToCreateAssociationMixin<programatico_presupuestals>;
  // solicituds belongsTo proyectos via id_proyecto
  id_proyecto_proyecto!: proyectos;
  getId_proyecto_proyecto!: Sequelize.BelongsToGetAssociationMixin<proyectos>;
  setId_proyecto_proyecto!: Sequelize.BelongsToSetAssociationMixin<proyectos, proyectosId>;
  createId_proyecto_proyecto!: Sequelize.BelongsToCreateAssociationMixin<proyectos>;
  // solicituds hasMany adjuntos via id_solicitud
  adjuntos!: adjuntos[];
  getAdjuntos!: Sequelize.HasManyGetAssociationsMixin<adjuntos>;
  setAdjuntos!: Sequelize.HasManySetAssociationsMixin<adjuntos, adjuntosId>;
  addAdjunto!: Sequelize.HasManyAddAssociationMixin<adjuntos, adjuntosId>;
  addAdjuntos!: Sequelize.HasManyAddAssociationsMixin<adjuntos, adjuntosId>;
  createAdjunto!: Sequelize.HasManyCreateAssociationMixin<adjuntos>;
  removeAdjunto!: Sequelize.HasManyRemoveAssociationMixin<adjuntos, adjuntosId>;
  removeAdjuntos!: Sequelize.HasManyRemoveAssociationsMixin<adjuntos, adjuntosId>;
  hasAdjunto!: Sequelize.HasManyHasAssociationMixin<adjuntos, adjuntosId>;
  hasAdjuntos!: Sequelize.HasManyHasAssociationsMixin<adjuntos, adjuntosId>;
  countAdjuntos!: Sequelize.HasManyCountAssociationsMixin;
  // solicituds hasMany files via id_solicitud
  files!: files[];
  getFiles!: Sequelize.HasManyGetAssociationsMixin<files>;
  setFiles!: Sequelize.HasManySetAssociationsMixin<files, filesId>;
  addFile!: Sequelize.HasManyAddAssociationMixin<files, filesId>;
  addFiles!: Sequelize.HasManyAddAssociationsMixin<files, filesId>;
  createFile!: Sequelize.HasManyCreateAssociationMixin<files>;
  removeFile!: Sequelize.HasManyRemoveAssociationMixin<files, filesId>;
  removeFiles!: Sequelize.HasManyRemoveAssociationsMixin<files, filesId>;
  hasFile!: Sequelize.HasManyHasAssociationMixin<files, filesId>;
  hasFiles!: Sequelize.HasManyHasAssociationsMixin<files, filesId>;
  countFiles!: Sequelize.HasManyCountAssociationsMixin;
  // solicituds hasMany solicitud_facturas via id_solicitud
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
  // solicituds hasMany solicitud_verificacion via id_solicitud
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

  static initModel(sequelize: Sequelize.Sequelize): typeof solicituds {
    return solicituds.init({
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    id_solicitante: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_direccion: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    id_validador: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    id_programatico_presupuestal: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'programatico_presupuestals',
        key: 'id'
      }
    },
    id_cat_verificacion_solicituds: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    id_programa: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'programas',
        key: 'id'
      }
    },
    id_proyecto: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'proyectos',
        key: 'id'
      }
    },
    id_capitulo: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'capitulos',
        key: 'id'
      }
    },
    rfc_beneficiario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tipo_beneficiario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_contrato: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_estatus: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'estatuses',
        key: 'id'
      }
    },
    folio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    importe: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    importe_letra: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_solicitud: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    observaciones_validador: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_limite: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'solicituds',
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
        name: "solicituds_id_programatico_presupuestal_foreign",
        using: "BTREE",
        fields: [
          { name: "id_programatico_presupuestal" },
        ]
      },
      {
        name: "solicituds_id_programa_foreign",
        using: "BTREE",
        fields: [
          { name: "id_programa" },
        ]
      },
      {
        name: "solicituds_id_proyecto_foreign",
        using: "BTREE",
        fields: [
          { name: "id_proyecto" },
        ]
      },
      {
        name: "solicituds_id_capitulo_foreign",
        using: "BTREE",
        fields: [
          { name: "id_capitulo" },
        ]
      },
      {
        name: "solicituds_id_estatus_foreign",
        using: "BTREE",
        fields: [
          { name: "id_estatus" },
        ]
      },
    ]
  });
  }
}
