import { RiCloseLine, RiSearchLine } from "@remixicon/react";

type SearchProps = {
  handleSearch: () => void;
  isOpen: boolean;
};

const Search: React.FC<SearchProps> = ({ handleSearch, isOpen }) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "top-0" : "-top-full"
      } left-0 w-full h-full bg-bgSearch bg-opacity-60 backdrop-blur-lg py-32 px-6 z-[100] transition-[top] duration-500`}
    >
      <form className="flex items-center gap-2 py-2 px-4 bg-containerColor border-2 border-solid border-borderColor rounded-md">
        <RiSearchLine className="w-5 h-5 text-titleColor" />
        <input
          type="search"
          placeholder="What are you looking for?"
          className="w-full p-2 bg-containerColor text-textColor placeholder:text-sm"
        />
      </form>

      <RiCloseLine
        className="absolute top-8 right-8 w-8 h-8 text-textColor cursor-pointer hover:text-firstColor transition-all duration-300 ease-in-out"
        onClick={handleSearch}
      />
    </div>
  );
};
export default Search;
