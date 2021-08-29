import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ISheetData } from "../../interfaces/root";
import actions from "./action";

export interface IReducerState extends ISheetData {
  loading: boolean;
  error: string;
  update: {
    error: string;
  };
  delete: {
    error: string;
  };
}

const INITIAL_STATE: IReducerState = {
  loading: true,
  data: {},
  error: "",
  update: {
    error: "",
  },
  delete: {
    error: "",
  },
};

const reducer = reducerWithInitialState<IReducerState>(INITIAL_STATE)
  .case(actions.saveSheet, (state, payload) => (
    {
      ...state,
      ...payload
    }
  ))
  .case(actions.getSheet.started, (state) => ({
    ...state,
    loading: true,
    error: "",
  }))
  .case(actions.getSheet.done, (state, { result }) => ({
    ...state,
    loading: false,
    data: result.data,
  }))
  .case(actions.getSheet.failed, (state) => ({
    ...state,
    loading: false,
    error: "Something went wrong!",
  }))
  .case(actions.updateSheet.started, (state) => ({
    ...state,
    loading: true,
    update: {
      ...state.update,
      error: "",
    },
  }))
  .case(actions.updateSheet.done, (state) => ({
    ...state,
    loading: false,
  }))
  .case(actions.updateSheet.failed, (state) => ({
    ...state,
    loading: false,
    update: {
      ...state.update,
      error: "Something went wrong!",
    },
  }));

export default reducer;
