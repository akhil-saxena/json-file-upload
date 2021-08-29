import { ISheetData, IError, ISuccess } from "./root";

export type IId = string;

export interface IGetSheetResponse extends ISheetData {}

export interface IDeleteSheetResponse extends ISuccess {}

export interface IUpdateSheetResponse extends ISuccess {}

export interface IDeleteSheetError extends IError {}

export interface IUpdateSheetError extends IError {}
