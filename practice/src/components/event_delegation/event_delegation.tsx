import { useState } from "react";

export default function EventDelegation() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  //   Event delegation is a JavaScript pattern where instead of adding event listeners to individual elements, you attach a single event listener to a parent element. This improves performance and allows handling dynamically added elements efficiently.

  //   🔥 Where to Use?
  // ✅ Managing large lists or tables.
  // ✅ Handling buttons in dynamically generated content.
  // ✅ Improving memory efficiency in complex apps.

  const handleClick = (e: any) => {
    if (e.target.tagName === "LI") {
      console.log(e.target.textContent);
    }
  };
  return (
    <div>
      <ul onClick={handleClick}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
        <span>Click me</span>
      </button>
    </div>
  );
}
