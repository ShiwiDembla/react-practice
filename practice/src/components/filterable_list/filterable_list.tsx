import { useMemo, useState } from "react";

export default function FilterableList() {
  const [searchTerm, setSearchTerm] = useState("");
  const list = ["apple", "banana", "cherry", "date", "elderberry"];

  //each time the input changes, the list is filtered based on the search term

  // memo is used to prevent the list from being filtered on every render,
  // here it's not needed, but it can be useful when the list is large and when we have to apply conditions in the dependency array
  const filteredList = useMemo(() => {
    return list.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {searchTerm}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
