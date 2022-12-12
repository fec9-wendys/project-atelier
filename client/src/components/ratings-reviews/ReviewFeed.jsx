import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewModal from './ReviewModal.jsx';
import { RFContainer } from './styles/Container.js';
import { ReviewEntries, ReviewButtons } from './styles/Reviewfeed';
const { useState, useEffect } = React;

const ReviewFeed = ({ reviews, currentProduct, request, metaData, QuarterStars, setReviews, shownReviews, setShownReviews, count, setCount, filter, reviewButton, setReviewButton, isOpen, SetIsOpen }) => {

  // const handleClick = () => {
  //   if (reviews.length > 2) {
  //     document.getElementById('more-reviews-btn').style.visibility = 'visible';
  //   }

  //   if (count > reviews.length - 2) {
  //     setReviewButton('Less Reviews');

  //   }

  //   if (reviewButton === 'Less Reviews') {
  //     setCount(0);
  //     setReviewButton('More Reviews');
  //   }

  //   setCount(previousCount => previousCount + 2);
  // }

  return (
    <RFContainer>
      <ReviewEntries>
        {shownReviews.map((review, index) => {
          return <ReviewEntry review={review} key={index} request={request} currentProduct={currentProduct}
            setShownReviews={setShownReviews} count={count} QuarterStars={QuarterStars} filter={filter} />;
        })}
      </ReviewEntries>
      {/* {reviews.length > 2 ? <button id='more-reviews-btn' className='btn' onClick={handleClick}> {reviewButton} </button> : null}
      <button className='open-modal btn' onClick={() => SetIsOpen(true)}> + Add A Review </button> */}
      <ReviewModal isOpen={isOpen} onClose={() => { SetIsOpen(false) }} currentProduct={currentProduct} request={request}
        metaData={metaData} setReviews={setReviews} />
    </RFContainer>
  );
};

export default ReviewFeed;