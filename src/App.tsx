import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./components/home/HomeView";
import Layout from "./components/ui/Layout";
import NewReviewView from "./components/review/NewReviewView";
import EditReviewView from "./components/review/EditReviewView";
import { loadReviews } from "./components/review/reviewReducer";
import { useAppDispatch } from "./redux/hooks";
import { APP_URLS } from "./utils/constants";
import SearchReviewView from "./components/review/SearchReviewView";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadReviews());
  });
  return (
    <Router>
      <Switch>
        {/* <SearchReviewView /> */}
        <Route path={APP_URLS.HOME} exact component={HomeView} />
        <Route path={APP_URLS.ADD_NEW_REVIEW} component={NewReviewView} />
        <Route
          path={`${APP_URLS.EDIT_REVIEW}/:id`}
          component={EditReviewView}
        />
      </Switch>
    </Router>
  );
}
