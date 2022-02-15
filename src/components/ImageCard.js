const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  
  return (
    <div className="break-inside-avoid-column rounded-xl bg-slate-200 mb-4">
      <img src={image.webformatURL} alt={image.user} className="rounded-t-xl min-w-full" />
      <p>Photo by {image.user}</p>
      <div className="p-4">
        <ul className="list-inside">
          <li>views: {image.views}</li>
          <li>likes: {image.likes}</li>
          <li>downloads: {image.downloads}</li>
        </ul>
        <div className="">
          {tags.map((tag, id) => (
            <p key={id} className="">
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
