import * as counterConstants from "../constants/counter.constants";

export const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case counterConstants.INCREMENTED:
         return state + 1;
      case counterConstants.DECREMENTED:
         return state - 1;
      default:
         return state;
   }
}