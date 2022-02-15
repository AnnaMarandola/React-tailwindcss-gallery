const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  
  return (
    <div className="">
      <img src={image.webformatURL} alt={image.user} className="" />
      <p>Photo by {image.user}</p>
      <div className="">
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
