import React, { useState } from "react";
import MadinaHW2 from "../../hw/L02/madina/App";
import ShowOnClickButton from "../../components/ShowOnClickButton";

// variables
const hws = {
  Madina: [
    {
      label: "HW2",
      component: <MadinaHW2 />,
    },
  ],
  Sasha: [
    {
      label: "HW2",
      component: null,
    },
  ],
};
// -----------------------------------------------------------------
const HomeWorks = () => {
  const [showMadinasHW, setShowMadinasHW] = useState(false);

  return (
    <section>
      <div>
        <button onClick={() => setShowMadinasHW((prev) => !prev)}>
          Madina
        </button>
        <button>Sasha</button>
      </div>
      <div>
        {showMadinasHW &&
          hws.Madina.map((item) => (
            <ShowOnClickButton
              buttonText={item.label}
              content={item.component}
            />
          ))}
      </div>
    </section>
  );
};

export default HomeWorks;
