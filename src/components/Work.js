import React from 'react';

function Work({ imageUrl, title, description, imagePosition = 'left' }) {
  return (
    <div className={`flex ${imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-center items-start space-x-4 p-4 shadow-md my-1 rounded-xl border border-orange-100`}>
      <img src={imageUrl} alt={title} className="w-52 rounded-3xl h-52 mx-10 my-2" />
      <div className="w-2/3 text-left">
        <h3 className="text-xl mb-4">{title}</h3>
        <p className='text-sm text-opacity-80'>{description}</p>
      </div>
    </div>
  );
}

export default Work;