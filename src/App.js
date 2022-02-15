import SearchForm from "./components/SearchForm";
import ImageCard from "./components/ImageCard";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("street art");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("query", query);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=25707047-0952c51f70574158e67a38c9e&q=${query}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [query]);

  console.log("images", images);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-teal-500 p-24">
      <h1 className="text-5xl font-bold p-4">Pixabay Gallery</h1>
      <SearchForm searchText={(text) => setQuery(text)} />
      {!isLoading && !images.length && <h1>No Images for this request</h1>}
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {images.map((image, id) => (
            <ImageCard key={id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
