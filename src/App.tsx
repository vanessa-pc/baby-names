import { NameList } from "./components/NameList";
import names from "./babyNamesData.json";
import { useState } from "react";
import { SearchBox } from "./components/SearchBox";
import { BabyNames } from "./components/Interface";
import searchString from "./utils/searchString";
import { Favorites } from "./components/Favorites";
import { sortNamesArray } from "./utils/sortNamesArray";
import RadioButton from "./components/RadioButton";

function App(): JSX.Element {
  const [searchName, setSearchName] = useState<string>("");

  const sortedNamesInit = sortNamesArray(names);

  const [sortedNames, setSortedNames] = useState<BabyNames[]>(sortedNamesInit);
  const [favorites, setFavorites] = useState<BabyNames[]>([]);

  const searchResults = searchString(names, searchName);

  const handleClickAdd = (name: BabyNames) => {
    setSortedNames(sortedNames.filter((element) => element.name !== name.name));
    !favorites.includes(name) && setFavorites([...favorites, name]);
  };

  const handleClickRemove = (name: BabyNames) => {
    setFavorites(favorites.filter((element) => element.name !== name.name));
    setSortedNames(sortNamesArray([...sortedNames, name]));
  };

  const female = (name: BabyNames) => name.sex === "f";
  const male = (name: BabyNames) => name.sex === "m";

  const handleFemale = () => {
    setSortedNames(sortedNamesInit.filter((element) => female(element)));
  };
  const handleMale = () => {
    setSortedNames(sortedNamesInit.filter((element) => male(element)));
  };

  const handleAll = () => {
    setSortedNames(sortedNamesInit);
  };

  return (
    <>
      <div className="radio-buttons">
        <RadioButton
          label="Female"
          id="female-radio"
          value="female"
          handleChange={handleFemale}
        />
        <br />
        <RadioButton
          label="Male"
          id="male-radio"
          value="male"
          handleChange={handleMale}
        />
        <br />
        <RadioButton
          label="All Names"
          id="all-radio"
          value="all"
          handleChange={handleAll}
        />
      </div>
      <div className="search-bar">
        <SearchBox searchName={searchName} setSearchName={setSearchName} />
      </div>
      {
        <div className="favorites">
          Favorite Names:{" "}
          <Favorites names={favorites} handleClickRemove={handleClickRemove} />
        </div>
      }
      <div className="name-list">
        {searchName === "" ? (
          <NameList names={sortedNames} handleClickAdd={handleClickAdd} />
        ) : searchResults.length > 0 ? (
          <NameList names={searchResults} handleClickAdd={handleClickAdd} />
        ) : (
          <p> No name found! </p>
        )}
      </div>
    </>
  );
}

export default App;
