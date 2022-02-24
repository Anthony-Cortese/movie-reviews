
import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'

import ReviewForm from './ReviewForm'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    getReviewInfo,
} from './reviewReducer'

import Review from '../../types/Review'

import s from './EditReviewView.module.css'

export default function EditReviewView() {
    const dispatch = useAppDispatch()

    return (
        <>
            <h1 className={s.title}>Edit your review :)</h1>
        </>
    )
}

