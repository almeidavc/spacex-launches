import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  numberOfResults: number;
  setNumberOfResults: Dispatch<SetStateAction<number>>;
}

const SearchCard = (props: Props): JSX.Element => {
  const { searchQuery, setSearchQuery, numberOfResults, setNumberOfResults } =
    props;

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChangeLimitFilter: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNumberOfResults(parseInt(e.target.value));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChangeSearch}
      ></input>
      <input
        type="number"
        value={numberOfResults}
        onChange={handleChangeLimitFilter}
      ></input>
      <button type="submit"></button>
    </form>
  );
};

export default SearchCard;
