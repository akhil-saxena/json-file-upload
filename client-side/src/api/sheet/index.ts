import axios from "../../services/axios";
import { IError } from "../../interfaces/root";
import {
  IGetSheetResponse,
  IDeleteSheetResponse,
  IUpdateSheetResponse,
  IDeleteSheetError,
  IUpdateSheetError,
  IId,
} from "../../interfaces/sheet";

export namespace GET {
  export type IResponse = IGetSheetResponse;

  export const getUrl = (id: IId) => `/sheet/${id}`;

  export const service = ({ id }: { id: IId }) => {
    const url = getUrl(id);
    return axios.get<IResponse>(url);
  };

  export type IResponseError = IError;
}

export namespace POST {
  export type IResponse = IUpdateSheetResponse;

  export const getUrl = (id: IId) => `/sheet/${id}`;

  export const service = ({ id }: { id: IId }) => {
    const url = getUrl(id);
    return axios.get<IResponse>(url);
  };

  export type IResponseError = IUpdateSheetError;
}

export namespace DELETE {
  export type IResponse = IDeleteSheetResponse;

  export const getUrl = (id: IId) => `/sheet/${id}`;

  export const service = ({ id }: { id: IId }) => {
    const url = getUrl(id);
    return axios.get<IResponse>(url);
  };

  export type IResponseError = IDeleteSheetError;
}
