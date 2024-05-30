import { MdOutlineSearch } from "react-icons/md";
// import SaltDisplay from "./SaltDisplay";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaltSuggestions, pharmacyId } from "../redux/actions";
import { salt, saltSearch, selectPhrmId } from "../redux/selector";
import SaltDisplay from "./SaltDisplay";

const SearchBar = () => {
    const [query, setQuery] = useState('paracetamol');
    const dispatch = useDispatch();
    const saltSuggestions = useSelector(saltSearch);
    console.log(saltSuggestions,"useslector")
    

    useEffect(() => {
      if (query !== '') {
        // Dispatch fetchSaltSuggestions action when query is not empty
        dispatch(fetchSaltSuggestions(query));
      }
    }, [query, dispatch]);
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Dispatch fetchSaltSuggestions action with query when search button is clicked
      if (query !== '') {
        dispatch(fetchSaltSuggestions(query));
        console.log("Search", query);
      }
    };

  return (
    <div className="container mx-auto flex flex-col p-2 py-6 m-h-screen w-[80%]">
      <h1 className="text-center shadow-2xl">Capsule</h1>

      <div className="bg-white w-full mx-auto rounded-full shadow-2xl p-2 mb-5 mt-9 sticky">
        <div className="flex items-center">
          <div className="p-5 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineSearch />
          </div>
          <input
            className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="mr-4" onClick={handleSearch}>SEARCH</button>
        </div>
      </div>

      <div className="border-b border-gray-300 my-[4rem]"></div>

      <div className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
        {/* <SaltDisplay saltSuggestions={saltSuggestions}/> */}
        {saltSuggestions.map(salt => (
        <SaltDisplay key={salt.id} salt={salt} />
        // <MedicineCard key={salt.id} salt={salt} />
      ))}
      </div>
    </div>
  );
};

export default SearchBar;
