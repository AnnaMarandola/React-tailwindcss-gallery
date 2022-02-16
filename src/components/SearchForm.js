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
    <div className=" py-3 w-full my-6 border-2 border-transparent border-b-slate-700">
      <form onSubmit={handleSubmit} className="sm:flex flex-col items-center md:flex-row">
        <input onChange={handleChange} placeholder="Search" className="rounded-md p-2 mt-3 max-w-fit bg-slate-100 md:mt-0" />
        <button type="submit" className="px-4 py-2 w-24 my-4  text-white bg-green-600 md:mx-4">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
