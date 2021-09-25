import { Model } from "sequelize-typescript";
export declare class KeyData extends Model {
    key_data_idx?: number;
    key_name?: string;
    access_key?: string;
    secret_key?: string;
    ip_limit?: string;
    data?: string;
    regist_datetime?: Date;
    update_datetime?: Date;
}
export declare class SelectKeyDataListReturn {
    count?: number;
    rows?: KeyData[];
}
export declare class InputKeyData {
    key_data_idx?: number;
    key_name?: string;
    access_key?: string;
    secret_key?: string;
    ip_limit?: string;
    data?: string;
    regist_datetime?: Date;
    update_datetime?: Date;
}
