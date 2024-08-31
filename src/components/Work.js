import React from 'react';

function Work({ imageUrl, title, description, imagePosition = 'left' }) {
  return (
    <div className={`flex ${imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'} justify-center flex items-center space-x-4 p-4 shadow-md my-1 rounded-xl border border-orange-100`}>
      <img src={imageUrl} alt={title} className="w-28 md:w-52 h-28 md:h-52 rounded-xl md:rounded-3xl mx-1 md:mx-10 my-1 md:my-2" />
      <div className="w-2/3 text-left">
        <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">{title}</h3>
        <p className='text-xs md:text-sm text-opacity-80'>{description}</p>
      </div>
    </div>
  );
}

export default Work;