import ImageCard from "@/components/shared/ImageCard";

const AllPhotosPage = async () => {

  const res = await fetch('https://pixgen-gamma.vercel.app/data.json');
  const data = await res.json();

  return (
    <div >
      <h1 className="m-5 font-bold text-2xl">All Photos</h1>
      <div className="grid grid-cols-4 gap-5">

        {
          data.map(photo => <ImageCard key={photo.id} photo={photo} />)
        }
      </div>

    </div>
  );
};

export default AllPhotosPage;