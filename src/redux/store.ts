import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import reviewReducer from '../components/reviewReducer'

export const store = configureStore({
    reducer: {
        review: reviewReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>

