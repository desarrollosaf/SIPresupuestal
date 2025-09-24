import type { Sequelize } from "sequelize";
import { adjuntos as _adjuntos } from "./adjuntos";
import type { adjuntosAttributes, adjuntosCreationAttributes } from "./adjuntos";
import { capitulos as _capitulos } from "./capitulos";
import type { capitulosAttributes, capitulosCreationAttributes } from "./capitulos";
import { cat_verificacion_solicituds as _cat_verificacion_solicituds } from "./cat_verificacion_solicituds";
import type { cat_verificacion_solicitudsAttributes, cat_verificacion_solicitudsCreationAttributes } from "./cat_verificacion_solicituds";
import { estatuses as _estatuses } from "./estatuses";
import type { estatusesAttributes, estatusesCreationAttributes } from "./estatuses";
import { files as _files } from "./files";
import type { filesAttributes, filesCreationAttributes } from "./files";
import { folios as _folios } from "./folios";
import type { foliosAttributes, foliosCreationAttributes } from "./folios";
import { fuente_financiamientos as _fuente_financiamientos } from "./fuente_financiamientos";
import type { fuente_financiamientosAttributes, fuente_financiamientosCreationAttributes } from "./fuente_financiamientos";
import { metas_unidads as _metas_unidads } from "./metas_unidads";
import type { metas_unidadsAttributes, metas_unidadsCreationAttributes } from "./metas_unidads";
import { migrations as _migrations } from "./migrations";
import type { migrationsAttributes, migrationsCreationAttributes } from "./migrations";
import { model_has_permissions as _model_has_permissions } from "./model_has_permissions";
import type { model_has_permissionsAttributes, model_has_permissionsCreationAttributes } from "./model_has_permissions";
import { model_has_roles as _model_has_roles } from "./model_has_roles";
import type { model_has_rolesAttributes, model_has_rolesCreationAttributes } from "./model_has_roles";
import { partidas as _partidas } from "./partidas";
import type { partidasAttributes, partidasCreationAttributes } from "./partidas";
import { permissions as _permissions } from "./permissions";
import type { permissionsAttributes, permissionsCreationAttributes } from "./permissions";
import { personal_access_tokens as _personal_access_tokens } from "./personal_access_tokens";
import type { personal_access_tokensAttributes, personal_access_tokensCreationAttributes } from "./personal_access_tokens";
import { programas as _programas } from "./programas";
import type { programasAttributes, programasCreationAttributes } from "./programas";
import { programatico_presupuestals as _programatico_presupuestals } from "./programatico_presupuestals";
import type { programatico_presupuestalsAttributes, programatico_presupuestalsCreationAttributes } from "./programatico_presupuestals";
import { proveedores as _proveedores } from "./proveedores";
import type { proveedoresAttributes, proveedoresCreationAttributes } from "./proveedores";
import { proyecto_unidades as _proyecto_unidades } from "./proyecto_unidades";
import type { proyecto_unidadesAttributes, proyecto_unidadesCreationAttributes } from "./proyecto_unidades";
import { proyectos as _proyectos } from "./proyectos";
import type { proyectosAttributes, proyectosCreationAttributes } from "./proyectos";
import { proyectos_partidas as _proyectos_partidas } from "./proyectos_partidas";
import type { proyectos_partidasAttributes, proyectos_partidasCreationAttributes } from "./proyectos_partidas";
import { role_has_permissions as _role_has_permissions } from "./role_has_permissions";
import type { role_has_permissionsAttributes, role_has_permissionsCreationAttributes } from "./role_has_permissions";
import { roles as _roles } from "./roles";
import type { rolesAttributes, rolesCreationAttributes } from "./roles";
import { solicitud_facturas as _solicitud_facturas } from "./solicitud_facturas";
import type { solicitud_facturasAttributes, solicitud_facturasCreationAttributes } from "./solicitud_facturas";
import { solicitud_verificacion as _solicitud_verificacion } from "./solicitud_verificacion";
import type { solicitud_verificacionAttributes, solicitud_verificacionCreationAttributes } from "./solicitud_verificacion";
import { solicituds as _solicituds } from "./solicituds";
import type { solicitudsAttributes, solicitudsCreationAttributes } from "./solicituds";
import { sub_partidas as _sub_partidas } from "./sub_partidas";
import type { sub_partidasAttributes, sub_partidasCreationAttributes } from "./sub_partidas";
import { sub_verificacion_solicituds as _sub_verificacion_solicituds } from "./sub_verificacion_solicituds";
import type { sub_verificacion_solicitudsAttributes, sub_verificacion_solicitudsCreationAttributes } from "./sub_verificacion_solicituds";

export {
  _adjuntos as adjuntos,
  _capitulos as capitulos,
  _cat_verificacion_solicituds as cat_verificacion_solicituds,
  _estatuses as estatuses,
  _files as files,
  _folios as folios,
  _fuente_financiamientos as fuente_financiamientos,
  _metas_unidads as metas_unidads,
  _migrations as migrations,
  _model_has_permissions as model_has_permissions,
  _model_has_roles as model_has_roles,
  _partidas as partidas,
  _permissions as permissions,
  _personal_access_tokens as personal_access_tokens,
  _programas as programas,
  _programatico_presupuestals as programatico_presupuestals,
  _proveedores as proveedores,
  _proyecto_unidades as proyecto_unidades,
  _proyectos as proyectos,
  _proyectos_partidas as proyectos_partidas,
  _role_has_permissions as role_has_permissions,
  _roles as roles,
  _solicitud_facturas as solicitud_facturas,
  _solicitud_verificacion as solicitud_verificacion,
  _solicituds as solicituds,
  _sub_partidas as sub_partidas,
  _sub_verificacion_solicituds as sub_verificacion_solicituds,
};

export type {
  adjuntosAttributes,
  adjuntosCreationAttributes,
  capitulosAttributes,
  capitulosCreationAttributes,
  cat_verificacion_solicitudsAttributes,
  cat_verificacion_solicitudsCreationAttributes,
  estatusesAttributes,
  estatusesCreationAttributes,
  filesAttributes,
  filesCreationAttributes,
  foliosAttributes,
  foliosCreationAttributes,
  fuente_financiamientosAttributes,
  fuente_financiamientosCreationAttributes,
  metas_unidadsAttributes,
  metas_unidadsCreationAttributes,
  migrationsAttributes,
  migrationsCreationAttributes,
  model_has_permissionsAttributes,
  model_has_permissionsCreationAttributes,
  model_has_rolesAttributes,
  model_has_rolesCreationAttributes,
  partidasAttributes,
  partidasCreationAttributes,
  permissionsAttributes,
  permissionsCreationAttributes,
  personal_access_tokensAttributes,
  personal_access_tokensCreationAttributes,
  programasAttributes,
  programasCreationAttributes,
  programatico_presupuestalsAttributes,
  programatico_presupuestalsCreationAttributes,
  proveedoresAttributes,
  proveedoresCreationAttributes,
  proyecto_unidadesAttributes,
  proyecto_unidadesCreationAttributes,
  proyectosAttributes,
  proyectosCreationAttributes,
  proyectos_partidasAttributes,
  proyectos_partidasCreationAttributes,
  role_has_permissionsAttributes,
  role_has_permissionsCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  solicitud_facturasAttributes,
  solicitud_facturasCreationAttributes,
  solicitud_verificacionAttributes,
  solicitud_verificacionCreationAttributes,
  solicitudsAttributes,
  solicitudsCreationAttributes,
  sub_partidasAttributes,
  sub_partidasCreationAttributes,
  sub_verificacion_solicitudsAttributes,
  sub_verificacion_solicitudsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const adjuntos = _adjuntos.initModel(sequelize);
  const capitulos = _capitulos.initModel(sequelize);
  const cat_verificacion_solicituds = _cat_verificacion_solicituds.initModel(sequelize);
  const estatuses = _estatuses.initModel(sequelize);
  const files = _files.initModel(sequelize);
  const folios = _folios.initModel(sequelize);
  const fuente_financiamientos = _fuente_financiamientos.initModel(sequelize);
  const metas_unidads = _metas_unidads.initModel(sequelize);
  const migrations = _migrations.initModel(sequelize);
  const model_has_permissions = _model_has_permissions.initModel(sequelize);
  const model_has_roles = _model_has_roles.initModel(sequelize);
  const partidas = _partidas.initModel(sequelize);
  const permissions = _permissions.initModel(sequelize);
  const personal_access_tokens = _personal_access_tokens.initModel(sequelize);
  const programas = _programas.initModel(sequelize);
  const programatico_presupuestals = _programatico_presupuestals.initModel(sequelize);
  const proveedores = _proveedores.initModel(sequelize);
  const proyecto_unidades = _proyecto_unidades.initModel(sequelize);
  const proyectos = _proyectos.initModel(sequelize);
  const proyectos_partidas = _proyectos_partidas.initModel(sequelize);
  const role_has_permissions = _role_has_permissions.initModel(sequelize);
  const roles = _roles.initModel(sequelize);
  const solicitud_facturas = _solicitud_facturas.initModel(sequelize);
  const solicitud_verificacion = _solicitud_verificacion.initModel(sequelize);
  const solicituds = _solicituds.initModel(sequelize);
  const sub_partidas = _sub_partidas.initModel(sequelize);
  const sub_verificacion_solicituds = _sub_verificacion_solicituds.initModel(sequelize);

  permissions.belongsToMany(roles, { as: 'role_id_roles', through: role_has_permissions, foreignKey: "permission_id", otherKey: "role_id" });
  roles.belongsToMany(permissions, { as: 'permission_id_permissions', through: role_has_permissions, foreignKey: "role_id", otherKey: "permission_id" });
  solicituds.belongsTo(capitulos, { as: "id_capitulo_capitulo", foreignKey: "id_capitulo"});
  capitulos.hasMany(solicituds, { as: "solicituds", foreignKey: "id_capitulo"});
  solicituds.belongsTo(estatuses, { as: "id_estatus_estatus", foreignKey: "id_estatus"});
  estatuses.hasMany(solicituds, { as: "solicituds", foreignKey: "id_estatus"});
  model_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(model_has_permissions, { as: "model_has_permissions", foreignKey: "permission_id"});
  role_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "permission_id"});
  proyectos.belongsTo(programas, { as: "id_programas_programa", foreignKey: "id_programas"});
  programas.hasMany(proyectos, { as: "proyectos", foreignKey: "id_programas"});
  solicituds.belongsTo(programas, { as: "id_programa_programa", foreignKey: "id_programa"});
  programas.hasMany(solicituds, { as: "solicituds", foreignKey: "id_programa"});
  solicituds.belongsTo(programatico_presupuestals, { as: "id_programatico_presupuestal_programatico_presupuestal", foreignKey: "id_programatico_presupuestal"});
  programatico_presupuestals.hasMany(solicituds, { as: "solicituds", foreignKey: "id_programatico_presupuestal"});
  proyecto_unidades.belongsTo(proyectos, { as: "id_proyecto_proyecto", foreignKey: "id_proyecto"});
  proyectos.hasMany(proyecto_unidades, { as: "proyecto_unidades", foreignKey: "id_proyecto"});
  solicituds.belongsTo(proyectos, { as: "id_proyecto_proyecto", foreignKey: "id_proyecto"});
  proyectos.hasMany(solicituds, { as: "solicituds", foreignKey: "id_proyecto"});
  model_has_roles.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(model_has_roles, { as: "model_has_roles", foreignKey: "role_id"});
  role_has_permissions.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "role_id"});
  adjuntos.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud"});
  solicituds.hasMany(adjuntos, { as: "adjuntos", foreignKey: "id_solicitud"});
  files.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud"});
  solicituds.hasMany(files, { as: "files", foreignKey: "id_solicitud"});
  solicitud_facturas.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud"});
  solicituds.hasMany(solicitud_facturas, { as: "solicitud_facturas", foreignKey: "id_solicitud"});
  solicitud_verificacion.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud"});
  solicituds.hasMany(solicitud_verificacion, { as: "solicitud_verificacions", foreignKey: "id_solicitud"});
  solicitud_facturas.belongsTo(sub_partidas, { as: "id_subpartida_sub_partida", foreignKey: "id_subpartida"});
  sub_partidas.hasMany(solicitud_facturas, { as: "solicitud_facturas", foreignKey: "id_subpartida"});
  solicitud_verificacion.belongsTo(sub_verificacion_solicituds, { as: "id_verificacion_sub_verificacion_solicitud", foreignKey: "id_verificacion"});
  sub_verificacion_solicituds.hasMany(solicitud_verificacion, { as: "solicitud_verificacions", foreignKey: "id_verificacion"});

  return {
    adjuntos: adjuntos,
    capitulos: capitulos,
    cat_verificacion_solicituds: cat_verificacion_solicituds,
    estatuses: estatuses,
    files: files,
    folios: folios,
    fuente_financiamientos: fuente_financiamientos,
    metas_unidads: metas_unidads,
    migrations: migrations,
    model_has_permissions: model_has_permissions,
    model_has_roles: model_has_roles,
    partidas: partidas,
    permissions: permissions,
    personal_access_tokens: personal_access_tokens,
    programas: programas,
    programatico_presupuestals: programatico_presupuestals,
    proveedores: proveedores,
    proyecto_unidades: proyecto_unidades,
    proyectos: proyectos,
    proyectos_partidas: proyectos_partidas,
    role_has_permissions: role_has_permissions,
    roles: roles,
    solicitud_facturas: solicitud_facturas,
    solicitud_verificacion: solicitud_verificacion,
    solicituds: solicituds,
    sub_partidas: sub_partidas,
    sub_verificacion_solicituds: sub_verificacion_solicituds,
  };
}
