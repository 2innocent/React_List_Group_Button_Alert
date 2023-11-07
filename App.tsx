import { useState } from "react";
import Alert from "./alert";
import Message from "./message";
function App() {
  let [alert, setalert] = useState(false);

  let cities = ["Lagos", "Kano", "Owerri", "Ilorin", "Onitsha"];

  return (
    <div>
      {alert && <Alert onClose={() => setalert(false)}>My Alert</Alert>}
      <button onClick={() => setalert(true)}>Hello World</button>

      <Message
        cities={cities}
        heading="heading"
        onSelectCity={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
