import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto container px-20'>
            <h2 className='text-3xl py-5 font-bold'>Questions Answer</h2>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingOne">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        <strong> What is Context API</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        Context api is used to pass data using component tree. we used props drilling before but it's painful when we used it we passed data manually at every level. context api has made it easy now we can pass data directly like globally. context api has been designed to share data globally for a tree component of react instead of props drilling. context api basically are used when many components want to access of it. context api has made props drilling repetition.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        <strong> What is Semantic Tag</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        Semantic means in programming, the meaning of every peace of code what you write. there several good sign to write our code semantically. when we follow semantic way of writing code, we can understand our code in later. semantic tag are used make the code meaningful and professional. when someone reviews your code so that he can understand you are a software professional. There is an important thing in SEO. Because of using semantic in our code, code will be optimized in correctly. <br/>
        <strong>Examples</strong>
          <article>article</article>
          <aside>aside</aside>
          <details>details</details>
          <figcaption>figcaption</figcaption>
          <figure>figure</figure>
          <footer>footer</footer>
          <header>header</header>
          <main>main</main>
          <mark>mark</mark>
          <nav>nav</nav>
          <section>section</section>
          <summary>summary</summary>
          <time>time</time>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        <strong>Difference between Inline block and Inline block Elements</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
        Inline block elements allow to set width and height also margin and padding in the tag. there a interesting thing of using inline block element. it is used to display items horizontally instead of vertically. the major different is inline block does not break the line after the element used. it's very useful to developers. block element breaks the line and goes to next line. it's also useful but we make mistake using of these two elements of writing code. we have had clear about of the elements.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;