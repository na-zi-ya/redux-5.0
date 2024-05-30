import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFormKey, selectSelectedForm } from "../redux/selector";
import { formAction } from "../redux/actions";

const Form = ({ salt, resetStrengthAndPacking }) => {
  const selectedForm = useSelector(selectSelectedForm);
  const [selecteForm, setselecteForm] = useState(salt.available_forms[0]);
  const dispatch = useDispatch();
  console.log(selectedForm, "redux-selectedForm");



  const handleItemClick = (item) => {
    console.log(item,"90909090")
    dispatch(formAction(item));
    setselecteForm(item)
    resetStrengthAndPacking(item);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="ml-[-6.5rem] grid grid-cols-2 grid-rows-2 gap-5">
        {salt.available_forms.map((form, index) => (
          <button
            key={index}
            className={`border text-[12px] px-2 font-semibold ${
              form === selecteForm
                ? "border-solid border-2 border-black rounded-md shadow-blue"
                : "border-dashed border-2 border-gray-700 text-gray-700 rounded-md"
            }`}
            onClick={() => handleItemClick(form)}
          >
            {form}
          </button>
        )
        )}
      </div>
    </div>
  );
};

export default Form;
