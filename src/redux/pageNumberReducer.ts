import { SET_PAGE_NUMBER } from "./constant";

const initialState = 1;
const pageNumberReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case SET_PAGE_NUMBER:
          return action.payload;
        default:
          return state;
      }
};
export default pageNumberReducer;