import { combineReducers } from "redux";
import { reducer as SheetReducer, IState as ISheetState } from "./Sheet";
import { ThunkAction } from "redux-thunk";

export interface IRootState {
  sheet: ISheetState;
}

export default combineReducers<IRootState>({
  sheet: SheetReducer,
});

export type IThunk = ThunkAction<any, IRootState, any, any>;
