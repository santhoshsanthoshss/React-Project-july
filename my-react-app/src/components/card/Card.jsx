import React from "react";
const Card = ({username="santhosh",description="default Text"}) => {
  return (
    <div>
      <figure className="md:flex items-center justify-evenly mb-2 bg-slate-100 rounded-xl p-8 md:p-10 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam reprehenderit eaque repudiandae accusantium in alias,
              vel doloribus aliquam voluptatibus. Tenetur distinctio et nemo
              quod architecto ipsa earum labore dolor quisquam.
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{description}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};



export default Card;
