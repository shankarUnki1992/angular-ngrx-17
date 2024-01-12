import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customIncreament, decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(initialState,
  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      count: initialState.count
    }
  }),
  on(customIncreament, (state, action) => {
    console.log({ ...state }, { ...action });
    return {
      ...state,
      count: action.valueType == 'add' ? state.count + action.value : state.count - action.value
    }
  })
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
