import Review from "../types/Review"

export async function fetchReviews(): Promise<Review[] | []> {
    return fetch('/api/reviews')
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error(err.message))
}