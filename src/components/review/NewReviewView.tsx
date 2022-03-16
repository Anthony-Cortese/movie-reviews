import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import ReviewForm from "./ReviewForm";
import { addReview } from "./reviewReducer";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import Review from "../../types/Review";

import s from "./NewReviewView.module.css";
import { APP_URLS } from "../../utils/constants";

const defaultValues: Review = {
  id: uuid(),
  title: "",
  genres: "",
  opinion: "",
};

export default function NewReviewView() {
  const dispatch = useAppDispatch();

  const { push } = useHistory();

  const onSubmit: SubmitHandler<Review> = (data) =>
    dispatch(addReview(data)).then(() => push(APP_URLS.HOME));

  return (
    <div className={s.newdiv}>
      <div className={s.newreview}>
        <img
          className={s.movieimg}
          src="https://i.postimg.cc/tJk5BJnj/Winter-Movie-Review.png"
          alt="Winter-Movie-Review"
        />
        <img
          className={s.alien}
          src="https://i.postimg.cc/htZVS0ZF/Alien-PNG-Picture-1.png"
          alt="Alien"
        />
      </div>
      <ReviewForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        buttonTitle="Share"
      />
    </div>
  );
}
