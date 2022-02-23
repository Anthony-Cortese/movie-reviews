import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

import Review from "../../types/Review";

import { AppThunk } from "../../redux/store";
import { fetchReviews } from "../../services/reviews";

export interface ReviewState {
    reviews: Review[] | undefined
}

const initialState: ReviewState = {
    reviews: undefined,

}

export const loadReviews = createAsyncThunk(
    'indexReviews/getStatus',
    async () => {
        const response = await fetchReviews()
        return response
    }
)

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadReviews.fulfilled, (state, action) => {
                state.reviews = action.payload
            })
        }   

})

export const selectReviews = (state: RootState) => state.review.reviews

export const getReviewInfo =
    (searchId: string): AppThunk =>
    (dispatch, getState) => {
        const currentValue = selectReviews(getState())
        const result = currentValue?.find(({ id }) => id === searchId)
        if (!result) throw new Error('No review was found')
    }


export default reviewSlice.reducer