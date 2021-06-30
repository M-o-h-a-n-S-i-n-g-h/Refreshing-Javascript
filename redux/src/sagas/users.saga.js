import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import * as userConstants from "../constants/user.constants";

export function* getUsers() {
   try {
      let users = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
      yield put({type: userConstants.GET_USERS_SUCCESS, data: users.data});
   } catch (err) {
      console.error(err.message);
   }
}

export function* watchUsers() {
   yield takeLatest(userConstants.GET_USERS, getUsers);
}