

import React, { useState, useEffect } from "react";

function RightVertical({ sliderUser }) {
  const [sliderVal, setSliderValue] = useState(sliderUser); // Initialize the slider value with the provided prop

  useEffect(() => {
    // Update the slider value when the prop 'sliderUser' changes
    setSliderValue(sliderUser);
  }, [sliderUser]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="right-component">
      <input
        type="range"
        min="1"
        max="100"
        value={sliderVal}
        onChange={handleSliderChange}
        className="slider"
      />
      <p>{sliderVal}</p>
    </div>
  );
}

export default RightVertical;
