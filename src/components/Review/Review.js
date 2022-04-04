import React from 'react';
import useReview from '../useReview/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [reviews] = useReview([])

    return (
        <div>
        <h2 className='text-4xl font-bold py-10'>All Reviews</h2>
            <div className='p-4 leading-2 grid grid-cols-3 gap-4'>
            {
                reviews.map(review => <ReviewDetail review={review}></ReviewDetail>)
            }
            </div>
        </div>
    );
};

export default Review;