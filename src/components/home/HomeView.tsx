import Spinner from '../ui/Spinner'
import Review from '../review/Review'
import { selectReviews } from '../../components/review/reviewReducer'
import s from './HomeView.module.css'
import { useAppSelector } from '../../redux/hooks'
import  Layout  from '../ui/Layout'

export default function HomeView() {
    const reviews = useAppSelector(selectReviews)

    return (
        <div className={s.reviews}>
            <Layout children />
            {reviews ? (
                reviews.length !== 0 ? (
                    reviews.map(review => (
                        <Review data={review} key={review.id} />
                    ))
                ) : (
                    <p>No reviews found :( Add one!</p>
                )
            ) : (
                <Spinner />
            )}
        </div>
    )
}
