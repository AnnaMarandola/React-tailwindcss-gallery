const ImageTags = ({tags}) => {
    return (
        <div className="flex flex-wrap py-6">
        {tags.map((tag, id) => (
          <p
            key={id}
            className="text-xs px-3 py-1 mr-4 my-1 min-w-fit rounded-full bg-green-800"
          >
            #{tag}
          </p>
        ))}
      </div>
    )
}

export default ImageTags;
