import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSaltSuggestions, setSaltSuggestions, setError, setLoading } from './actions';

const BASE_URL = 'https://backend.cappsule.co.in/api/v1';

function* fetchSaltSuggestionsSaga(action, pharmId="1,2,3") {
  try {
    yield put(setLoading(true)); 
    const response = yield call(axios.get, `${BASE_URL}/new_search?q=${action.payload}&pharmacyIds=${pharmId}`);
    const tablets = response.data.data.saltSuggestions;
    console.log(tablets, "tablets");
    yield put(setSaltSuggestions(tablets));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchFetchSaltSuggestions() {
  yield takeLatest(fetchSaltSuggestions.type, fetchSaltSuggestionsSaga);
}
