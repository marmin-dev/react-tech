import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest, select } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
  const number = yield select((state) => state.number);
  console.log(number);
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
  const number = yield select((state) => state.number);
  console.log(number);
}

export function* counterSaga() {
  //takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해준다
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  //takeLastest는 기존에 실행중이던 작업이 있다면 취소 처리하고
  //가장 마지막으로 실행된 작업만 수행한다
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
