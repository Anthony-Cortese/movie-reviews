import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

import Review from "../../types/Review";

export interface ReviewState {
    reviews: Review[] | undefined
}

const initialState: ReviewState = {
    reviews: undefined,

}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {}
})

export const selectReviews = (state: RootState) => state.review.reviews


export default reviewSlice.reducer