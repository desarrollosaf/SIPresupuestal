"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub_verificacion_solicituds = exports.sub_partidas = exports.solicituds = exports.solicitud_verificacion = exports.solicitud_facturas = exports.roles = exports.role_has_permissions = exports.proyectos_partidas = exports.proyectos = exports.proyecto_unidades = exports.proveedores = exports.programatico_presupuestals = exports.programas = exports.personal_access_tokens = exports.permissions = exports.partidas = exports.model_has_roles = exports.model_has_permissions = exports.migrations = exports.metas_unidads = exports.fuente_financiamientos = exports.folios = exports.files = exports.estatuses = exports.cat_verificacion_solicituds = exports.capitulos = exports.adjuntos = void 0;
exports.initModels = initModels;
const adjuntos_1 = require("./adjuntos");
Object.defineProperty(exports, "adjuntos", { enumerable: true, get: function () { return adjuntos_1.adjuntos; } });
const capitulos_1 = require("./capitulos");
Object.defineProperty(exports, "capitulos", { enumerable: true, get: function () { return capitulos_1.capitulos; } });
const cat_verificacion_solicituds_1 = require("./cat_verificacion_solicituds");
Object.defineProperty(exports, "cat_verificacion_solicituds", { enumerable: true, get: function () { return cat_verificacion_solicituds_1.cat_verificacion_solicituds; } });
const estatuses_1 = require("./estatuses");
Object.defineProperty(exports, "estatuses", { enumerable: true, get: function () { return estatuses_1.estatuses; } });
const files_1 = require("./files");
Object.defineProperty(exports, "files", { enumerable: true, get: function () { return files_1.files; } });
const folios_1 = require("./folios");
Object.defineProperty(exports, "folios", { enumerable: true, get: function () { return folios_1.folios; } });
const fuente_financiamientos_1 = require("./fuente_financiamientos");
Object.defineProperty(exports, "fuente_financiamientos", { enumerable: true, get: function () { return fuente_financiamientos_1.fuente_financiamientos; } });
const metas_unidads_1 = require("./metas_unidads");
Object.defineProperty(exports, "metas_unidads", { enumerable: true, get: function () { return metas_unidads_1.metas_unidads; } });
const migrations_1 = require("./migrations");
Object.defineProperty(exports, "migrations", { enumerable: true, get: function () { return migrations_1.migrations; } });
const model_has_permissions_1 = require("./model_has_permissions");
Object.defineProperty(exports, "model_has_permissions", { enumerable: true, get: function () { return model_has_permissions_1.model_has_permissions; } });
const model_has_roles_1 = require("./model_has_roles");
Object.defineProperty(exports, "model_has_roles", { enumerable: true, get: function () { return model_has_roles_1.model_has_roles; } });
const partidas_1 = require("./partidas");
Object.defineProperty(exports, "partidas", { enumerable: true, get: function () { return partidas_1.partidas; } });
const permissions_1 = require("./permissions");
Object.defineProperty(exports, "permissions", { enumerable: true, get: function () { return permissions_1.permissions; } });
const personal_access_tokens_1 = require("./personal_access_tokens");
Object.defineProperty(exports, "personal_access_tokens", { enumerable: true, get: function () { return personal_access_tokens_1.personal_access_tokens; } });
const programas_1 = require("./programas");
Object.defineProperty(exports, "programas", { enumerable: true, get: function () { return programas_1.programas; } });
const programatico_presupuestals_1 = require("./programatico_presupuestals");
Object.defineProperty(exports, "programatico_presupuestals", { enumerable: true, get: function () { return programatico_presupuestals_1.programatico_presupuestals; } });
const proveedores_1 = require("./proveedores");
Object.defineProperty(exports, "proveedores", { enumerable: true, get: function () { return proveedores_1.proveedores; } });
const proyecto_unidades_1 = require("./proyecto_unidades");
Object.defineProperty(exports, "proyecto_unidades", { enumerable: true, get: function () { return proyecto_unidades_1.proyecto_unidades; } });
const proyectos_1 = require("./proyectos");
Object.defineProperty(exports, "proyectos", { enumerable: true, get: function () { return proyectos_1.proyectos; } });
const proyectos_partidas_1 = require("./proyectos_partidas");
Object.defineProperty(exports, "proyectos_partidas", { enumerable: true, get: function () { return proyectos_partidas_1.proyectos_partidas; } });
const role_has_permissions_1 = require("./role_has_permissions");
Object.defineProperty(exports, "role_has_permissions", { enumerable: true, get: function () { return role_has_permissions_1.role_has_permissions; } });
const roles_1 = require("./roles");
Object.defineProperty(exports, "roles", { enumerable: true, get: function () { return roles_1.roles; } });
const solicitud_facturas_1 = require("./solicitud_facturas");
Object.defineProperty(exports, "solicitud_facturas", { enumerable: true, get: function () { return solicitud_facturas_1.solicitud_facturas; } });
const solicitud_verificacion_1 = require("./solicitud_verificacion");
Object.defineProperty(exports, "solicitud_verificacion", { enumerable: true, get: function () { return solicitud_verificacion_1.solicitud_verificacion; } });
const solicituds_1 = require("./solicituds");
Object.defineProperty(exports, "solicituds", { enumerable: true, get: function () { return solicituds_1.solicituds; } });
const sub_partidas_1 = require("./sub_partidas");
Object.defineProperty(exports, "sub_partidas", { enumerable: true, get: function () { return sub_partidas_1.sub_partidas; } });
const sub_verificacion_solicituds_1 = require("./sub_verificacion_solicituds");
Object.defineProperty(exports, "sub_verificacion_solicituds", { enumerable: true, get: function () { return sub_verificacion_solicituds_1.sub_verificacion_solicituds; } });
function initModels(sequelize) {
    const adjuntos = adjuntos_1.adjuntos.initModel(sequelize);
    const capitulos = capitulos_1.capitulos.initModel(sequelize);
    const cat_verificacion_solicituds = cat_verificacion_solicituds_1.cat_verificacion_solicituds.initModel(sequelize);
    const estatuses = estatuses_1.estatuses.initModel(sequelize);
    const files = files_1.files.initModel(sequelize);
    const folios = folios_1.folios.initModel(sequelize);
    const fuente_financiamientos = fuente_financiamientos_1.fuente_financiamientos.initModel(sequelize);
    const metas_unidads = metas_unidads_1.metas_unidads.initModel(sequelize);
    const migrations = migrations_1.migrations.initModel(sequelize);
    const model_has_permissions = model_has_permissions_1.model_has_permissions.initModel(sequelize);
    const model_has_roles = model_has_roles_1.model_has_roles.initModel(sequelize);
    const partidas = partidas_1.partidas.initModel(sequelize);
    const permissions = permissions_1.permissions.initModel(sequelize);
    const personal_access_tokens = personal_access_tokens_1.personal_access_tokens.initModel(sequelize);
    const programas = programas_1.programas.initModel(sequelize);
    const programatico_presupuestals = programatico_presupuestals_1.programatico_presupuestals.initModel(sequelize);
    const proveedores = proveedores_1.proveedores.initModel(sequelize);
    const proyecto_unidades = proyecto_unidades_1.proyecto_unidades.initModel(sequelize);
    const proyectos = proyectos_1.proyectos.initModel(sequelize);
    const proyectos_partidas = proyectos_partidas_1.proyectos_partidas.initModel(sequelize);
    const role_has_permissions = role_has_permissions_1.role_has_permissions.initModel(sequelize);
    const roles = roles_1.roles.initModel(sequelize);
    const solicitud_facturas = solicitud_facturas_1.solicitud_facturas.initModel(sequelize);
    const solicitud_verificacion = solicitud_verificacion_1.solicitud_verificacion.initModel(sequelize);
    const solicituds = solicituds_1.solicituds.initModel(sequelize);
    const sub_partidas = sub_partidas_1.sub_partidas.initModel(sequelize);
    const sub_verificacion_solicituds = sub_verificacion_solicituds_1.sub_verificacion_solicituds.initModel(sequelize);
    permissions.belongsToMany(roles, { as: 'role_id_roles', through: role_has_permissions, foreignKey: "permission_id", otherKey: "role_id" });
    roles.belongsToMany(permissions, { as: 'permission_id_permissions', through: role_has_permissions, foreignKey: "role_id", otherKey: "permission_id" });
    solicituds.belongsTo(capitulos, { as: "id_capitulo_capitulo", foreignKey: "id_capitulo" });
    capitulos.hasMany(solicituds, { as: "solicituds", foreignKey: "id_capitulo" });
    solicituds.belongsTo(estatuses, { as: "id_estatus_estatus", foreignKey: "id_estatus" });
    estatuses.hasMany(solicituds, { as: "solicituds", foreignKey: "id_estatus" });
    model_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id" });
    permissions.hasMany(model_has_permissions, { as: "model_has_permissions", foreignKey: "permission_id" });
    role_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id" });
    permissions.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "permission_id" });
    proyectos.belongsTo(programas, { as: "id_programas_programa", foreignKey: "id_programas" });
    programas.hasMany(proyectos, { as: "proyectos", foreignKey: "id_programas" });
    solicituds.belongsTo(programas, { as: "id_programa_programa", foreignKey: "id_programa" });
    programas.hasMany(solicituds, { as: "solicituds", foreignKey: "id_programa" });
    solicituds.belongsTo(programatico_presupuestals, { as: "id_programatico_presupuestal_programatico_presupuestal", foreignKey: "id_programatico_presupuestal" });
    programatico_presupuestals.hasMany(solicituds, { as: "solicituds", foreignKey: "id_programatico_presupuestal" });
    proyecto_unidades.belongsTo(proyectos, { as: "id_proyecto_proyecto", foreignKey: "id_proyecto" });
    proyectos.hasMany(proyecto_unidades, { as: "proyecto_unidades", foreignKey: "id_proyecto" });
    solicituds.belongsTo(proyectos, { as: "id_proyecto_proyecto", foreignKey: "id_proyecto" });
    proyectos.hasMany(solicituds, { as: "solicituds", foreignKey: "id_proyecto" });
    model_has_roles.belongsTo(roles, { as: "role", foreignKey: "role_id" });
    roles.hasMany(model_has_roles, { as: "model_has_roles", foreignKey: "role_id" });
    role_has_permissions.belongsTo(roles, { as: "role", foreignKey: "role_id" });
    roles.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "role_id" });
    adjuntos.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud" });
    solicituds.hasMany(adjuntos, { as: "adjuntos", foreignKey: "id_solicitud" });
    files.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud" });
    solicituds.hasMany(files, { as: "files", foreignKey: "id_solicitud" });
    solicitud_facturas.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud" });
    solicituds.hasMany(solicitud_facturas, { as: "solicitud_facturas", foreignKey: "id_solicitud" });
    solicitud_verificacion.belongsTo(solicituds, { as: "id_solicitud_solicitud", foreignKey: "id_solicitud" });
    solicituds.hasMany(solicitud_verificacion, { as: "solicitud_verificacions", foreignKey: "id_solicitud" });
    solicitud_facturas.belongsTo(sub_partidas, { as: "id_subpartida_sub_partida", foreignKey: "id_subpartida" });
    sub_partidas.hasMany(solicitud_facturas, { as: "solicitud_facturas", foreignKey: "id_subpartida" });
    solicitud_verificacion.belongsTo(sub_verificacion_solicituds, { as: "id_verificacion_sub_verificacion_solicitud", foreignKey: "id_verificacion" });
    sub_verificacion_solicituds.hasMany(solicitud_verificacion, { as: "solicitud_verificacions", foreignKey: "id_verificacion" });
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
