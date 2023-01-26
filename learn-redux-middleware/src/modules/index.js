import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});
export function* rootSaga() {
  // all함수는 여러사가를 합쳐 주는 역할을 한다
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
