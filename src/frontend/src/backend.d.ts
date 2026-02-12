import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MappingInfo {
    timestamp: Time;
    swapId: string;
    walletId: string;
}
export type Time = bigint;
export interface backendInterface {
    addMappingInfo(walletId: string, swapId: string): Promise<void>;
    deleteMappingInfoByTimeRange(startTimestamp: Time, endTimestamp: Time): Promise<void>;
    getAllMappingInfo(): Promise<Array<MappingInfo>>;
    getFirstMappingInfo(): Promise<MappingInfo | null>;
}
