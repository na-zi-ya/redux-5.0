import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedForm, selectSelectedPacking, selectSelectedStrength } from "../../redux/selector";
import { packingAction } from "../../redux/actions";

const Packing = ({ salt, packings, setPackings,resetStrengthAndPacking }) => {
  const selectedForm = useSelector(selectSelectedForm);
  const selectedStrength = useSelector(selectSelectedStrength);
  const selectedPacking = useSelector(selectSelectedPacking)

  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    dispatch(packingAction(item));
    // resetStrengthAndPacking(item);
  };
  return (
    <div className="grid grid-cols-2">
      <div className="ml-[-6.5rem] grid grid-cols-2 grid-rows-2 gap-5">
        {Object.keys(salt.salt_forms_json[selectedForm][selectedStrength]).map(
          (packing) => (
            <button
              key={packing}
              onClick={() => handleItemClick(packing)}
              className={packing === packings ? "bg-blue-800" : ""}
            >
              {packing}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Packing;
