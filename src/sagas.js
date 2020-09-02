import { put, takeLatest, call, all } from 'redux-saga/effects';

// function* test(action) {
// 	try {
// 		const response = yield call(getAuthorizationUser, action.user);
// 		yield put(receiveAuthLoginUser(response))
// 	}
// 	catch (e) {
// 		console.log(e)
// 	}
// }

// function* testWatcher(action) {
// 	yield takeLatest(LOGIN_ACTIONS.LOGIN_ACTIONS_LOGIN_USER, test)
// }


export default function* mySaga() {
	yield all([
		// testWatcher(),
	]) 
}
