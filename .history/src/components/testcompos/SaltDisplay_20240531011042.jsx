import React, { useEffect, useState } from "react";
import Form from "../Form";
import Strength from "./Strength";
import Packing from "./Packing";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFormKey,
  selectLowestPrice,
  selectSelectedForm,
  selectSelectedPacking,
  selectSelectedStrength,
  selectStrengthKey,
} from "../../redux/selector";
import {
  formAction,
  lowestPriceAction,
  packingAction,
  resetSelectedForm,
  strengthAction,
} from "../../redux/actions";
import LowestPrice from "./LowestPrice";

const SaltDisplay = ({ salt }) => {
  const selectedForm = useSelector(selectSelectedForm);
  const selectedStrength = useSelector(selectSelectedStrength);
  const selectedPacking = useSelector(selectSelectedPacking);
  const lowestPrice = useSelector(selectLowestPrice);
  const [select,setSelect] = useState()
  const [packings,setPackings] = useState()


  const dispatch = useDispatch();
  console.log(selectedStrength, "selectedForm from useSelector");

  useEffect(() => {
    if (salt.available_forms.length > 0) {
      const initialForm = salt.available_forms[0];
      dispatch(formAction(initialForm));
      resetStrengthAndPacking(initialForm); // Reset selectedStrength and selectedPacking
    }
  }, [salt, dispatch]);

  // useEffect(() => {
  //   if (selectedForm && selectedStrength && selectedPacking) {
  //     const prices = Object.values(
  //       salt.salt_forms_json[selectedForm][selectedStrength][selectedPacking] ||
  //         {}
  //     )
  //       .filter(Boolean)
  //       .flat();
  //     const lowest =
  //       prices.length > 0
  //         ? prices.reduce((min, item) =>
  //             item.selling_price < min.selling_price ? item : min
  //           )
  //         : null;

  //     dispatch(lowestPriceAction(
  //       lowest || {
  //         selling_price: "N/A",
  //         pharmacy_id: "No stores selling this product",
  //       }
  //     ));
  //   }
  // }, [selectedForm, selectedStrength, selectedPacking, salt]);

  const resetStrengthAndPacking = (form) => {
    console.log(form, "reset");
    // setSelectedStrength('');
    // setSelectedPacking('');
    // dispatch(strengthAction(""));
    // dispatch(resetSelectedForm(form))
    if (salt.salt_forms_json[form]) {
      const initialStrength = Object.keys(salt.salt_forms_json[form])[0];
      dispatch(strengthAction(initialStrength));
      setSelect(initialStrength)
      if (salt.salt_forms_json[form][initialStrength]) {
        const initialPacking = Object.keys(
          salt.salt_forms_json[form][initialStrength]
        )[0];
        // setSelectedPacking(initialPacking);
        dispatch(packingAction(initialPacking));
        setPackings(initialPacking)
      }
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4 w-full p-2 lg:rounded-md md:rounded-md cursor-pointer border-2 rounded-md shadow-2xl">
      <div className="col-span-1">
        <div className="grid grid-cols-2 my-4">
          <div className=" py-4 px-2">Forms:</div>
          <Form
            salt={salt}
            resetStrengthAndPacking={(form) => resetStrengthAndPacking(form)}
          />
        </div>

        <div className="grid grid-cols-2  my-4">
          <div className="py-4 px-2">Strength:</div>

          {selectedForm && salt.salt_forms_json[selectedForm] && (
            <Strength salt={salt} select={select} resetStrengthAndPacking={(strength) => resetStrengthAndPacking(strength)}/>
          )}
        </div>

        <div className="grid grid-cols-2  my-4">
          <div className="py-4 px-2">Packing:</div>
          {selectedStrength &&
            salt.salt_forms_json[selectedForm][selectedStrength] && (
              <Packing salt={salt} packings={packings} setPackings={setPackings} />
            )}
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="bg-gray-100 p-4">Text</div>
        <div className="bg-gray-100 p-4">a | b | c</div>
      </div>
      <div className="col-span-1 flex items-center justify-center p-4 bg-gradient-to-r from-white to-blue-500 rounded-md">
        {/* <LowestPrice lowestPrice={lowestPrice} /> */}
      </div>
    </div>
  );
};

export default SaltDisplay;
