import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Manufacturer = {
    id: Generated<string>;
    name: string;
    fullName: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type Processor = {
    id: Generated<string>;
    model: string;
    brand: string;
    socketId: string;
    l1Cache: number;
    l2Cache: number;
    l3Cache: number;
    tdp: number;
    releaseDate: Timestamp;
    msrp: number;
    manufacturerId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type ProcessorCoreInfo = {
    id: Generated<string>;
    type: string | null;
    coreCount: number;
    threadCount: number;
    baseClock: number;
    boostClock: number;
    processorId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type Socket = {
    id: Generated<string>;
    name: string;
    alternateName: string | null;
    launchDate: Timestamp;
    companyId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type DB = {
    Manufacturer: Manufacturer;
    Processor: Processor;
    ProcessorCoreInfo: ProcessorCoreInfo;
    Socket: Socket;
};
