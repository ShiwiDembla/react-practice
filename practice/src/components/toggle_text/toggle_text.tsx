import { useState } from "react";

export default function ToggleText() {
  const [isTextToggled, setIsTextToggled] = useState<boolean>(false);

  return (
    <div>
      <p>{isTextToggled ? "Hello world" : "Good Bye World!"}</p>
      <button onClick={() => setIsTextToggled(!isTextToggled)}>
        Toggle Text
      </button>
    </div>
  );
}
