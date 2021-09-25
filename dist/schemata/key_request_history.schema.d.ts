import { Model } from "sequelize-typescript";
export declare class KeyRequestHistory extends Model {
    key_request_history_idx?: number;
    key_data_idx?: number;
    ip?: string;
    result?: string;
    regist_datetime?: Date;
    update_datetime?: Date;
}
export declare class SelectKeyRequestHistoryListReturn {
    count?: number;
    rows?: KeyRequestHistory[];
}
export declare class InputKeyRequestHistory {
    key_request_history_idx?: number;
    key_data_idx?: number;
    ip?: string;
    result?: string;
    regist_datetime?: Date;
    update_datetime?: Date;
}
