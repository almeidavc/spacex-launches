import { useState } from "react";
import "./App.css";
import SearchCard from "./components/SearchCard";

const App = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [numberOfResults, setNumberOfResults] = useState(5);

  return (
    <div className="App">
      <SearchCard
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        numberOfResults={numberOfResults}
        setNumberOfResults={setNumberOfResults}
      />
    </div>
  );
};

export default App;
