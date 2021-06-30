import * as userConstants from "../constants/user.constants";

export const getUserReducer = (state = {users: []}, action) => {
   switch (action.type) {
      case userConstants.GET_USERS_SUCCESS:
         return {
            ...state,
            users: action.data
         }
      default:
         return state;
   }
}