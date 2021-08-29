export interface ICoordinate {
  x: number;
  y: number;
}

export interface IValue {
  value: string;
}

export type IHandleChangedCell = ({ x, y }: ICoordinate, value: IValue) => void;

export type IUpdateCells = () => void;

export interface ISheetData {
  data: Record<string, any>;
}

export interface IError {
  message: string;
  status: "FAIL";
}

export interface ISuccess {
  message: string;
  status: "SUCCESS";
}
