import {
  Controller,
  Get,
  Req,
  Res,
  Next,
  Post,
  Param,
  UseGuards,
  Ip,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { KeyData } from "./schemata/key_data.schema";
import { KeyRequestHistory } from "./schemata/key_request_history.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  async health(@Req() req, @Param() params, @Ip() ipaddress) {
    let ip = " ";
    if (req.headers["x-forwarded-for"]) {
      ip = req.headers["x-forwarded-for"].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
    } else {
      ip = req.ip;
    }
    return (
      "giftistar kms now! hostname =" +
      ", ip =" +
      ip +
      ", ipaddress =" +
      ipaddress
    );
  }

  @Get("get_env/:access_key/:secret_key")
  async getEnvTest(@Req() req, @Res() res) {
    const access_key = req.params.access_key;
    const secret_key = req.params.secret_key;
    console.log("DB_HOST", process.env.DB_HOST);

    console.log("access_key", access_key);
    console.log("secret_key", secret_key);

    const ip = this.appService.get_ip(req);
    console.log("ip", ip);

    let key_data_idx = null;
    try {
      const data = await KeyData.findOne({ where: { access_key, secret_key } });

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
      await KeyRequestHistory.create({
        ip,
        key_data_idx,
        result: "success",
      });
    } catch (error) {
      await KeyRequestHistory.create({
        ip,
        key_data_idx,
        result: "fail",
      });
      res.json(JSON.stringify(error));
    }
  }
}
