import { useState } from "react";

export default function FilterableList() {
  const [searchTerm, setSearchTerm] = useState("");
  const list = ["apple", "banana", "cherry", "date", "elderberry"];

  //each time the input changes, the list is filtered based on the search term
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
