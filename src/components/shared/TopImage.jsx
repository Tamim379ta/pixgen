import React from 'react';
import ImageCard from './ImageCard';

const TopImage = async () => {

  const res = await fetch('https://pixgen-gamma.vercel.app/data.json');
  const data = await res.json();

  const photos = data.slice(0, 8)


  return (
    <>
    <h1 className='mt-5 font-bold text-2xl'>Top Images</h1>
      <div className='grid grid-cols-4 mt-5 gap-10'>
        {
          photos.map(photo => <ImageCard key={photo.id} photo={photo} />)
        }
      </div>
    </>
  );
};

export default TopImage;