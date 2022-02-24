import { SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import ReviewForm from './ReviewForm'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import Review from '../../types/Review'


import s from './NewReviewView.module.css'

export default function NewReviewView() {
    return (
        <>
            <h1 className={s.title}>Share your review :)</h1>
        </>
    )
}