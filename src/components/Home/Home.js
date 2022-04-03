import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../CustomHook/CustomHook";
import Review from "../Review/Review";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Home = () => {

    const [review, setReview] = useReview([])
    const navigate = useNavigate()
    
  return (
    <div>
      <div className="flex container mx-auto px-20 justify-between items-center mt-10">
        <div className=" w-2/4">
        <div className="homepage-title text-4xl font-bold uppercase">
          <h2 className="mb-5">
            <span style={{ color: "#F9AA8C" }}>Books</span> help us to improve
            our <span style={{ color: "#3B719F" }}>Knowledge</span>
          </h2>
          <h2>
            We can <span style={{ color: "#F9AA8C" }}>enrich</span> ourselves by
            reading <span style={{ color: "#3B719F" }}>Books</span>
          </h2>
        </div>
        <p className="text-xl mt-5 text-zinc-600	">Different writers write books in different categories in the world. Some writes technical books like Jhankar Mahbub and some writes knowledgeable books by which we can improve ourselves. Books are not only way to increase our knowledge but books are best friends of us.</p>
        </div>
        <div className="homepage-image">
          <img className=" shadow-xl rounded-lg"
            src="https://m.media-amazon.com/images/I/41ifBtAoOcL.jpg "
            alt=""
          />
        </div>
      </div>
      <div className="customer-review mt-20">
        <h2 className="text-3xl font-bold">Customer reviews (3)</h2>
        <div className="grid grid-cols-3 px-20 gap-3 p-4 mt-20">
            {
                review.map(review => <ReviewDetail review={review} key={review.id}></ReviewDetail>)
            }
        </div>
        <div className="customer-review-all mt-20 mb-20">
            <button onClick={() => navigate('/review')} className="bg-blue-400 rounded-md p-4 text-white font-bold">See All Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
