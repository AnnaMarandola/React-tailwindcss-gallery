import { useState } from "react";
const SearchForm = ({ searchText }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(input);
  };

  return (
    <div className="p-12 w-fit">
      <form onSubmit={handleSubmit} className="flex">
        <input onChange={handleChange} className= "bg-teal-900 w-fit py-2" />
        <button type="submit" className="px-4 py-2 text-white bg-black">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
