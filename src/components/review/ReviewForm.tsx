import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../ui/Button";

import Review from "../../types/Review";

import s from "./ReviewForm.module.css";
import Rating from "../ui/Rating";

interface IReviewForm {
  defaultValues: Review;
  onSubmit: SubmitHandler<Review>;
  buttonTitle: string;
}

export default function ReviewForm({
  defaultValues,
  onSubmit,
  buttonTitle,
}: IReviewForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Review>({ mode: "onTouched", defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div>
        <label htmlFor="title">
          Title
          <input
            type="text"
            placeholder="Movie title"
            {...register("title", { required: true })}
          />
        </label>
        {errors.title && (
          <p className={s.error} data-testid="error_message">
            This field is required
          </p>
        )}
      </div>
      Rating
      <div className={s.rating}>
        {/* <Rating /> */}

        <label htmlFor="genres">
          <input
            type="radio"
            value="5"
            id="5"
            {...register("genres", { required: true })}
          />
          ☆
        </label>

        <label htmlFor="genres">
          <input
            type="radio"
            value="4"
            id="4"
            {...register("genres", { required: true })}
          />
          ☆
        </label>
        <label htmlFor="genres">
          <input
            type="radio"
            value="3"
            id="3"
            {...register("genres", { required: true })}
          />
          ☆
        </label>

        <label htmlFor="genres">
          <input
            type="radio"
            value="2"
            id="2"
            {...register("genres", { required: true })}
          />
          ☆
        </label>

        <label htmlFor="genres">
          <input
            type="radio"
            value="1"
            id="1"
            {...register("genres", { required: true })}
          />
          ☆
        </label>
        {errors.genres && (
          <p className={s.error} data-testid="error_message">
            This field is required
          </p>
        )}
      </div>
      <div>
        <label htmlFor="opinion">
          Review
          <textarea
            rows={4}
            placeholder="Your opinion"
            {...register("opinion", { required: true })}
          />
        </label>
        {errors.opinion && (
          <p className={s.error} data-testid="error_message">
            This field is required
          </p>
        )}
      </div>
      <Button type="submit" data-testid="button-submit_review_form">
        {buttonTitle}
      </Button>
    </form>
  );
}
