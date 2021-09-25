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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const key_data_schema_1 = require("./schemata/key_data.schema");
const key_request_history_schema_1 = require("./schemata/key_request_history.schema");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async health(req, params, ipaddress) {
        let ip = " ";
        if (req.headers["x-forwarded-for"]) {
            ip = req.headers["x-forwarded-for"].split(",")[0];
        }
        else if (req.connection && req.connection.remoteAddress) {
            ip = req.connection.remoteAddress;
        }
        else {
            ip = req.ip;
        }
        return ("giftistar kms now! hostname =" +
            ", ip =" +
            ip +
            ", ipaddress =" +
            ipaddress);
    }
    async getEnvTest(req, res) {
        const access_key = req.params.access_key;
        const secret_key = req.params.secret_key;
        console.log("DB_HOST", process.env.DB_HOST);
        console.log("access_key", access_key);
        console.log("secret_key", secret_key);
        const ip = this.appService.get_ip(req);
        console.log("ip", ip);
        let key_data_idx = null;
        try {
            const data = await key_data_schema_1.KeyData.findOne({ where: { access_key, secret_key } });
            console.log("data", data);
            key_data_idx = data.key_data_idx;
            if (!data) {
                throw "invalid key";
            }
            if (data.ip_limit) {
                if (data.ip_limit.indexOf(ip) == -1) {
                    throw "not allowed ip";
                }
            }
            const en_data = this.appService.encryptProcss(data.data);
            res.json(en_data);
            await key_request_history_schema_1.KeyRequestHistory.create({
                ip,
                key_data_idx,
                result: "success",
            });
        }
        catch (error) {
            await key_request_history_schema_1.KeyRequestHistory.create({
                ip,
                key_data_idx,
                result: "fail",
            });
            res.json(JSON.stringify(error));
        }
    }
};
__decorate([
    common_1.Get("/health"),
    __param(0, common_1.Req()), __param(1, common_1.Param()), __param(2, common_1.Ip()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "health", null);
__decorate([
    common_1.Get("get_env/:access_key/:secret_key"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getEnvTest", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map