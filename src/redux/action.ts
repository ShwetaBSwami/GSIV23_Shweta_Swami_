import { SET_PAGE_NUMBER } from "./constant";

export const setPageNumber = (pageNumber: number) => {
    return {
        type:SET_PAGE_NUMBER,
        payload:pageNumber,
    }
}