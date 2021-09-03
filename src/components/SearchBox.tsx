export function SearchBox({
  searchName,
  setSearchName,
}: {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <input
      className="search-input"
      type="text"
      value={searchName}
      placeholder="Enter a name..."
      onChange={(event) => {
        setSearchName(event.target.value);
      }}
    />
  );
}
