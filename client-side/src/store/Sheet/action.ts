import actionCreatorFactory from "typescript-fsa";
import * as sheetAPI from "../../api/sheet";
import { IThunk } from "../../store/reducers";
import { ISheetData } from "../../interfaces/root";

const actionCreator = actionCreatorFactory("SHEET");

const actions = {
  getSheet: actionCreator.async<
    { id: string },
    sheetAPI.GET.IResponse,
    sheetAPI.GET.IResponseError
  >("getSheet"),
  updateSheet: actionCreator.async<
    { id: string },
    sheetAPI.POST.IResponse,
    sheetAPI.POST.IResponseError
  >("updateSheet"),
  deleteSheet: actionCreator.async<
    { id: string },
    sheetAPI.DELETE.IResponse,
    sheetAPI.DELETE.IResponseError
  >("deleteSheet"),
  saveSheet: actionCreator<ISheetData>("saveSheet"),
};

const thunks = {
  getSheetAsync:
    (id: string): IThunk =>
    (dispatch, getState) => {
      dispatch(actions.getSheet.started({ id }));
      sheetAPI.GET.service({ id })
        .then((response) => {
          dispatch(
            actions.getSheet.done({
              result: response.data,
              params: { id },
            })
          );
        })
        .catch((error) => {
          dispatch(
            actions.getSheet.failed({
              error,
              params: { id },
            })
          );
        });
    },
  updateSheetAsync:
    (id: string, payload: ISheetData): IThunk =>
    (dispatch, getState) => {
      dispatch(actions.updateSheet.started({ id }));
      sheetAPI.POST.service({ id })
        .then((response) => {
          dispatch(
            actions.updateSheet.done({
              result: response.data,
              params: { id },
            })
          );
        })
        .catch((error) => {
          dispatch(
            actions.updateSheet.failed({
              error,
              params: { id },
            })
          );
        });
    },
  deleteSheetAsync:
    (id: string): IThunk =>
    (dispatch, getState) => {
      dispatch(actions.deleteSheet.started({ id }));
      sheetAPI.POST.service({ id })
        .then((response) => {
          dispatch(
            actions.deleteSheet.done({
              result: response.data,
              params: { id },
            })
          );
        })
        .catch((error) => {
          dispatch(
            actions.deleteSheet.failed({
              error,
              params: { id },
            })
          );
        });
    },
};

export default { ...actions, ...thunks };
