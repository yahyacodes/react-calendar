import { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, setValue] = useState(new Date());

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Sample">
      <header>
        <h1>react-calendar sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </main>
      </div>
    </div>
  );
}

export default App;
