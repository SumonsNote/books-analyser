import React from 'react';

const Review = (props) => {
    const {name, review, rating} = props.review;
    return (
        <div className='border-2 p-4 leading-2'>
            <div className='left'>
            <h2 className='font-bold text-xl'>Name: {name}</h2>
            <h2><span className='font-bold'>Review</span>: {review}</h2>
            <h2 className='font-bold'>Rating: {rating}</h2>
            </div>
        </div>
    );
};

export default Review;