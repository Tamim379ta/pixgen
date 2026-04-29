import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";
import { Chip, Separator } from '@heroui/react';


const PhotoDetailsPage = async ({ params }) => {

  const res = await fetch('https://pixgen-gamma.vercel.app/data.json');
  const data = await res.json();

  const { id } = await params;

  const photo = data.find(d => d.id == id)

  console.log(photo)

  return (
    <div>
      <div className='shadow-2xl max-w-xl mt-10 mx-auto rounded-2xl p-5'>
        <p className='text-xl font-semibold mt-2'>{photo.title}</p>
        <p className='text-xl font-semibold mt-2'>Promt: <span className="text-gray-500 text-[16px]">{photo.prompt}</span></p>
        <Chip color="success" size='lg' className='my-2'>{photo.category}</Chip>
        <div className='relative aspect-square'>
          <Image
            src={photo.imageUrl}
            alt='Image'
            fill
            className='object-cover rounded-2xl'
          />
        </div>

        <div className='flex items-center my-2 gap-5'>
          <p className='flex items-center gap-2 text-xl'> <FcLike />  {photo.likes}</p>
          <Separator orientation='vertical' />
          <p className='flex items-center gap-2 text-xl'> <MdOutlineFileDownload />
            {photo.downloads}</p>
        </div>

      </div>

    </div>
  );
};

export default PhotoDetailsPage;