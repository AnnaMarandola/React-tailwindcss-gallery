import SearchForm from "./components/SearchForm";
import ImageCard from "./components/ImageCard";
import "./index.css";
import { useState, useEffect } from "react";


function App() {
  const [query, setQuery] = useState("street art");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="flex flex-col justify-center w-full px-4 py-12 md:px-12 lg:px-24">
      <h1 className="text-5xl py-8 font-paytone-one">
        <span className="text-green-600">P</span>ixabay Gallery
        <span className="text-green-600">.</span>
      </h1>

      <SearchForm searchText={(text) => setQuery(text)} />
      {!isLoading && !images.length && <h1>No Images for this request</h1>}
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="columns-1 gap-8 md:columns-2 lg:columns-3 py-9">
          {images.map((image, id) => (
            <ImageCard key={id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
