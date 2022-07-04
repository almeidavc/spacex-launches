import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";

interface Props {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setNumberOfResults: Dispatch<SetStateAction<number>>;
}

const SearchCard = (props: Props): JSX.Element => {
  const { setSearchQuery, setNumberOfResults } = props;

  const [searchField, setSearchField] = useState("");
  const [limitField, setLimitField] = useState(0);

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchField(e.target.value);
  };

  const handleChangeLimit: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLimitField(parseInt(e.target.value));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearchQuery(searchField);
    setNumberOfResults(limitField);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchField}
        onChange={handleChangeSearch}
      ></input>
      <input
        type="number"
        value={limitField}
        onChange={handleChangeLimit}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchCard;
