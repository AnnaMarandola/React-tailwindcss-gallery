const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="relative group break-inside-avoid-column rounded-xl bg-slate-200 mb-8 transition duration-300 ease-in-out hover:scale-105 overflow-visible">
      <img
        src={image.webformatURL}
        alt={image.user}
        className="rounded-xl min-w-full "
      />
      <div className="bg-black text-white p-4 rounded-b-xl absolute bottom-0 w-full opacity-0 group-hover:opacity-80">
        <p>Photo by {image.user}</p>
        <div className="">
          <ul className="list-inside">
            <li>views: {image.views}</li>
            <li>likes: {image.likes}</li>
            <li>downloads: {image.downloads}</li>
          </ul>
          <div className="flex flex-wrap">
            {tags.map((tag, id) => (
              <p
                key={id}
                className="px-3 py-1 mr-4 my-1 min-w-fit rounded-full bg-slate-800"
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
