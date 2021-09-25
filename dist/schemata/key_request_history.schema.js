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
exports.InputKeyRequestHistory = exports.SelectKeyRequestHistoryListReturn = exports.KeyRequestHistory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const type_graphql_1 = require("type-graphql");
const BigInt = require('graphql-bigint');
let KeyRequestHistory = class KeyRequestHistory extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BIGINT({ length: 20 }) }),
    type_graphql_1.Field(_ => BigInt, { nullable: true }),
    __metadata("design:type", Number)
], KeyRequestHistory.prototype, "key_request_history_idx", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BIGINT({ length: 20 }) }),
    type_graphql_1.Field(_ => BigInt, { nullable: true }),
    __metadata("design:type", Number)
], KeyRequestHistory.prototype, "key_data_idx", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING({ length: 20 }) }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyRequestHistory.prototype, "ip", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING({ length: 20 }) }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], KeyRequestHistory.prototype, "result", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP') }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], KeyRequestHistory.prototype, "regist_datetime", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP') }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], KeyRequestHistory.prototype, "update_datetime", void 0);
KeyRequestHistory = __decorate([
    sequelize_typescript_1.Table({
        timestamps: false,
        tableName: 'key_request_history'
    }),
    type_graphql_1.ObjectType()
], KeyRequestHistory);
exports.KeyRequestHistory = KeyRequestHistory;
let SelectKeyRequestHistoryListReturn = class SelectKeyRequestHistoryListReturn {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], SelectKeyRequestHistoryListReturn.prototype, "count", void 0);
__decorate([
    type_graphql_1.Field(type => [KeyRequestHistory]),
    __metadata("design:type", Array)
], SelectKeyRequestHistoryListReturn.prototype, "rows", void 0);
SelectKeyRequestHistoryListReturn = __decorate([
    type_graphql_1.ObjectType()
], SelectKeyRequestHistoryListReturn);
exports.SelectKeyRequestHistoryListReturn = SelectKeyRequestHistoryListReturn;
let InputKeyRequestHistory = class InputKeyRequestHistory {
};
__decorate([
    type_graphql_1.Field(_ => BigInt, { nullable: true }),
    __metadata("design:type", Number)
], InputKeyRequestHistory.prototype, "key_request_history_idx", void 0);
__decorate([
    type_graphql_1.Field(_ => BigInt, { nullable: true }),
    __metadata("design:type", Number)
], InputKeyRequestHistory.prototype, "key_data_idx", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyRequestHistory.prototype, "ip", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], InputKeyRequestHistory.prototype, "result", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], InputKeyRequestHistory.prototype, "regist_datetime", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], InputKeyRequestHistory.prototype, "update_datetime", void 0);
InputKeyRequestHistory = __decorate([
    type_graphql_1.InputType()
], InputKeyRequestHistory);
exports.InputKeyRequestHistory = InputKeyRequestHistory;
//# sourceMappingURL=key_request_history.schema.js.map