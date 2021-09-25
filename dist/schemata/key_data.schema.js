"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputKeyData = exports.SelectKeyDataListReturn = exports.KeyData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const type_graphql_1 = require("type-graphql");
const BigInt = require('graphql-bigint');
let KeyData = class KeyData extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BIGINT({ length: 20 }) }),
    type_graphql_1.Field(_ => BigInt, { nullable: true }),
    __metadata("design:type", Number)
], KeyData.prototype, "key_data_idx", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING({ length: 100 }) }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyData.prototype, "key_name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING({ length: 100 }) }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyData.prototype, "access_key", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING({ length: 100 }) }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyData.prototype, "secret_key", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyData.prototype, "ip_limit", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyData.prototype, "data", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP') }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], KeyData.prototype, "regist_datetime", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP') }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], KeyData.prototype, "update_datetime", void 0);
KeyData = __decorate([
    sequelize_typescript_1.Table({
        timestamps: false,
        tableName: 'key_data'
    }),
    type_graphql_1.ObjectType()
], KeyData);
exports.KeyData = KeyData;
let SelectKeyDataListReturn = class SelectKeyDataListReturn {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], SelectKeyDataListReturn.prototype, "count", void 0);
__decorate([
    type_graphql_1.Field(type => [KeyData]),
    __metadata("design:type", Array)
], SelectKeyDataListReturn.prototype, "rows", void 0);
SelectKeyDataListReturn = __decorate([
    type_graphql_1.ObjectType()
], SelectKeyDataListReturn);
exports.SelectKeyDataListReturn = SelectKeyDataListReturn;
let InputKeyData = class InputKeyData {
};
__decorate([
    type_graphql_1.Field(_ => BigInt, { nullable: true }),
    __metadata("design:type", Number)
], InputKeyData.prototype, "key_data_idx", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyData.prototype, "key_name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyData.prototype, "access_key", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyData.prototype, "secret_key", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyData.prototype, "ip_limit", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyData.prototype, "data", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], InputKeyData.prototype, "regist_datetime", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], InputKeyData.prototype, "update_datetime", void 0);
InputKeyData = __decorate([
    type_graphql_1.InputType()
], InputKeyData);
exports.InputKeyData = InputKeyData;
//# sourceMappingURL=key_data.schema.js.map