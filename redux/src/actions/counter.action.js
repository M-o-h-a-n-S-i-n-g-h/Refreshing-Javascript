import * as counterConstants from "../constants/counter.constants"

export const incremented = () => {
   return {
      type: counterConstants.INCREMENTED,
   }
};

export const decremented = () => {
   return {
      type: counterConstants.DECREMENTED,
   }
};