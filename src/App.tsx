import React from 'react';
import { useEffect } from 'react';
import './App.css';
import HomeView from './components/home/HomeView';
import ReviewForm from './components/review/ReviewForm';
import { loadReviews } from './components/review/reviewReducer';
import { useAppDispatch } from './redux/hooks';


export default function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadReviews())
  })
  return (
    <div>
     <HomeView />
    </div>
  );
}

