import ImageInfo from "./ImageInfo";
import ImageTags from "./ImageTags";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="relative group break-inside-avoid-column rounded-xl bg-slate-200 mb-8 transition duration-500 ease-in-out hover:scale-105 overflow-visible">
      <img
        src={image.webformatURL}
        alt={image.user}
        className="rounded-xl min-w-full "
      />
      <div className="bg-black text-white p-4 rounded-b-xl absolute bottom-0 w-full opacity-0 transition duration-500 ease-in group-hover:opacity-80">
        <p className="text-right">
          Photo by <span className="font-pacifico text-lg">{image.user}</span>
        </p>
        <div>
          <ImageTags tags={tags} />
          <ImageInfo image={image} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
