import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from './auth';
import {
  initIngredientSaga
} from './burgerBulder';
import {
  purchaseBurgerSaga,
  fetchOrdersSaga
} from './order';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USERS, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),  
  ])
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_IGREDIENTS, initIngredientSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga); // yang sedang di eksekusi jadi dibatalkan, dieksekusi dengan proses yang baru, prefent double klik in orders
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
}