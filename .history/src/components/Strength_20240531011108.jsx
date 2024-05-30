import React, { useState } from "react";
import {
  selectSelectedForm,
  selectSelectedPacking,
  selectSelectedStrength,
} from "../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { packingAction, strengthAction } from "../redux/actions";

const Strength = ({ salt, select, resetStrengthAndPacking }) => {
  console.log(salt, "salt");
  const selectedForm = useSelector(selectSelectedForm);
  const selectedStrength = useSelector(selectSelectedStrength);
  const selectedPacking = useSelector(selectSelectedPacking);
  const dispatch = useDispatch();
  console.log(select,"selectedStrength")

  const handleItemClick = (item) => {
    dispatch(strengthAction(item));
  };

  return (
    <div className="grid grid-cols-2">
      <div className={`ml-[-6.5rem] grid grid-cols-2 grid-rows-2 gap-5`}>
        {Object.keys(salt.salt_forms_json[selectedForm]).map((strength) => (
          <button
            key={strength}
            onClick={() => handleItemClick(strength)}
            className={strength === select ? " bg-red-700" : ""}
          >
            {strength}
          </button>
        ))}
      </div>
      {/* {strengthItems.length > 4 && (
        <button
          onClick={toggleExpansion}
          className="text-blue-700 font-bold mt-[6rem]"
        >
          {expanded ? "Hide" : "More..."}
        </button>
      )} */}
    </div>
  );
};

export default Strength;
