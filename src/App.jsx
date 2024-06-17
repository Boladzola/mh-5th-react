import Keyboard from "./pages/keyboard/Keyboard";
import { useState } from "react";
import HomeWorks from "./pages/hws";

// variables

// Компонент - функция, которая возвращает jsx разметку или null
function App() {
  const [showHWs, setShowHWs] = useState(false);
  const [showLessons, setShowLessons] = useState(false);

  const toggleShowHWs = () => {
    setShowHWs((prev) => !prev);
    if (showLessons) setShowLessons(false);
  };
  const toggleShowLessons = () => {
    setShowLessons((prev) => !prev);
    if (showHWs) setShowHWs(false);
  };
  return (
    <div>
      <header>
        <button onClick={toggleShowHWs}>HWs</button>
        <button onClick={toggleShowLessons}>Lessons</button>
      </header>
      {/* <Counter /> */}
      <div>
        {showHWs && <HomeWorks />}
        {showLessons && <Keyboard />}
      </div>
    </div>
  );
}

export default App;

////
// onClick={() => {
//   // if (showHWs === true) {
//   // if (showHWs) {
//   //   setShowHWs(false);
//   // } else {
//   //   setShowHWs(true);
//   // }
//   //
//   // setShowHWs(prev => {
//   //   if (prev) return false
//   //   else return true
//   // })
// }}
