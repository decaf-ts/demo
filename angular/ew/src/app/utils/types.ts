import { KeyValue } from "@decaf-ts/for-angular";
import { StringLike } from "@decaf-ts/logging";

export type ErrorLike = StringLike | Error;

export type RouteItem = Record<string, string | KeyValue>;

export type StorageEntry = string | number | KeyValue | boolean | null;
