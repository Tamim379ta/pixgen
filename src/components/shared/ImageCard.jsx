import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcLike } from 'react-icons/fc';
import { MdOutlineFileDownload } from 'react-icons/md';

const ImageCard = ({ photo }) => {
  return (
    <div className='shadow-2xl rounded-2xl p-5'>
      <div className='relative aspect-square'>
        <Image
          src={photo.imageUrl}
          alt='Image'

          fill
          className='object-cover rounded-2xl'
        />

        <Chip size='sm' className='absolute top-2 right-2 '>{photo.category}</Chip>

      </div>

      <p className='text-xl font-semibold mt-2'>{photo.title}</p>

      <div className='flex items-center my-2 gap-5'>
        <p className='flex items-center gap-2 text-xl'> <FcLike />  {photo.likes}</p>
        <Separator orientation='vertical' />
        <p className='flex items-center gap-2 text-xl'> <MdOutlineFileDownload />
          {photo.downloads}</p>
      </div>

      <Button variant="outline" className={'w-full'}>
        <Link href={'/'}>View</Link>
      </Button>
    </div>
  );
};

export default ImageCard;