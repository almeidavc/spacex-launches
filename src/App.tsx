import { useState } from "react";
// import "./App.css";
import SearchCard from "./components/SearchCard";
import ResultsCard from "./components/ResultsCard";

const App = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [numberOfResults, setNumberOfResults] = useState(0);

  return (
    <div className="App">
      <SearchCard
        setSearchQuery={setSearchQuery}
        setNumberOfResults={setNumberOfResults}
      />
      {searchQuery && numberOfResults ? (
        <ResultsCard
          searchQuery={searchQuery}
          numberOfResults={numberOfResults}
        />
      ) : null}
    </div>
  );
};

export default App;
