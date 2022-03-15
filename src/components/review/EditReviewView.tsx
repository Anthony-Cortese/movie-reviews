
import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'

import ReviewForm from './ReviewForm'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    getReviewInfo,
    resetCurrentEdit,
    selectCurrentEdit,
    updateReview
} from './reviewReducer'

import Review from '../../types/Review'

import s from './EditReviewView.module.css'
import { APP_URLS } from '../../utils/constants'

export default function EditReviewView() {
    const dispatch = useAppDispatch()

    const currentEdit = useAppSelector(selectCurrentEdit)

    const { push } = useHistory()

    const { id } = useParams() as {
        id: string | undefined
    }

    const onSubmit: SubmitHandler<Review> = data =>
        dispatch(updateReview(data)).then(() => push(APP_URLS.HOME))

    useEffect(() => {
        if (id) dispatch(getReviewInfo(id))

        return () => {
            dispatch(resetCurrentEdit())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={s.edit_div}>
            <img
            className={s.movieimg} 
            src='https://i.postimg.cc/tJk5BJnj/Winter-Movie-Review.png' 
            alt='Winter-Movie-Review'
            />
            {currentEdit && (
                <ReviewForm
                    defaultValues={currentEdit}
                    onSubmit={onSubmit}
                    buttonTitle="Save"
                />
            )}
        </div>
    )
}

