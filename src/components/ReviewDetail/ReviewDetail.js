import React from 'react';

const ReviewDetail = (props) => {
    const {name, review, rating} = props.review;
    return (
        <div className='border-2 p-4 leading-2 rounded-md'>
            <h2 className='font-bold text-xl'>Name: {name}</h2>
            <h2><span className='font-bold'>Review</span>: {review}</h2>
            <h2 className='font-bold'>Rating: {rating}</h2>
        </div>
    );
};

export default ReviewDetail;