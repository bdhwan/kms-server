import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    health(req: any, params: any, ipaddress: any): Promise<string>;
    getEnvTest(req: any, res: any): Promise<void>;
}
