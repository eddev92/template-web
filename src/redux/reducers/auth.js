// import { LOGIN_ACTIONS, SAGA_GET_REQUEST_API, SAGA_RECEIVE_DATA, SAGA_GET_COMMENTS_BY_ID, SAGA_GET_RECEIVE_COMMENTS_BY_ID } from "../../constants/actions";
import { defaultValuesAuth } from "../../constants/constants";

let defaultState = defaultValuesAuth;

const auth = (state = defaultState, action) => {
  switch (action.type) {
    // case LOGIN_ACTIONS.LOGIN_ACTIONS_HANDLE_USER_INFO: {
    //   const aux = { ...state.user };

    //   aux[action.id] = action.value;

    //   return {
    //     ...state,
    //     user: aux
    //   }
    // }
 
    default:
      return state
  }
}

export default auth;