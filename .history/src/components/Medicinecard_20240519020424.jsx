// components/MedicineCard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLowestPrice, selectSelectedForm, selectSelectedPacking, selectSelectedStrength } from '../../redux/selector';
import { formAction, lowestPriceAction, packingAction, resetSelectedForm, strengthAction } from '../../redux/actions';
// import {
//   setSelectedForm,
//   setSelectedStrength,
//   setSelectedPacking,
//   setLowestPrice,
//   resetSelectedForm,
//   selectSelectedForm,
//   selectSelectedStrength,
//   selectSelectedPacking,
//   selectLowestPrice,
// } from '../features/saltsSlice';

const MedicineCard = ({ salt }) => {
  const dispatch = useDispatch();
  const selectedForm = useSelector(selectSelectedForm);
  const selectedStrength = useSelector(selectSelectedStrength);
  const selectedPacking = useSelector(selectSelectedPacking);
  const lowestPrice = useSelector(selectLowestPrice);

  console.log(selectedForm, selectedStrength, selectedPacking,"selectedForm")

  useEffect(() => {
    if (salt.available_forms.length > 0) {
      const initialForm = salt.available_forms[0];
      dispatch(formAction(initialForm));
      dispatch(resetSelectedForm()); // Reset selectedStrength and selectedPacking
    }
  }, [dispatch, salt]);

//   useEffect(() => {
//     if (selectedForm && selectedStrength && selectedPacking) {
//       const prices = Object.values(
//         salt.salt_forms_json[selectedForm][selectedStrength][selectedPacking] || {}
//       ).filter(Boolean).flat();
//       const lowest = prices.length > 0 ? prices.reduce((min, item) => (item.selling_price < min.selling_price ? item : min)) : null;
//       dispatch(lowestPriceAction(lowest || { selling_price: "N/A", pharmacy_id: "No stores selling this product" }));
//     }
//   }, [dispatch, selectedForm, selectedStrength, selectedPacking, salt]);

  const resetStrengthAndPacking = (form) => {
    dispatch(strengthAction(''));
    dispatch(packingAction(''));
    if (salt.salt_forms_json[form]) {
      const initialStrength = Object.keys(salt.salt_forms_json[form])[0];
      dispatch(strengthAction(initialStrength));
      if (salt.salt_forms_json[form][initialStrength]) {
        const initialPacking = Object.keys(salt.salt_forms_json[form][initialStrength])[0];
        dispatch(packingAction(initialPacking));
      }
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>{salt.salt}</h3>
        <div className="options">
          <div className="option-group">
            <span>Medicine:</span>
            <p>{salt.salt}</p>
            <p>{selectedForm} | {selectedStrength} | {selectedPacking}</p>
          </div>
          <div className="option-group">
            <span>Form:</span>
            {salt.available_forms.map(form => (
              <button
                key={form}
                onClick={() => { dispatch(formAction(form)); }}
                className={form === selectedForm ? 'active' : ''}
              >
                {form}
              </button>
            ))}
          </div>

          {selectedForm && salt.salt_forms_json[selectedForm] && (
            <div className="option-group">
              <span>Strength:</span>
              {Object.keys(salt.salt_forms_json[selectedForm]).map(strength => (
                <button
                  key={strength}
                  onClick={() => dispatch(strengthAction(strength))}
                  className={strength === selectedStrength ? 'active' : ''}
                >
                  {strength}
                </button>
              ))}
            </div>
          )}

          {selectedStrength && salt.salt_forms_json[selectedForm][selectedStrength] && (
            <div className="option-group">
              <span>Packing:</span>
              {Object.keys(salt.salt_forms_json[selectedForm][selectedStrength]).map(packing => (
                <button
                  key={packing}
                  onClick={() => dispatch(packingAction(packing))}
                  className={packing === selectedPacking ? 'active' : ''}
                >
                  {packing}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="result">
          {lowestPrice && lowestPrice.selling_price !== "N/A" ? (
            <>
              <h4>From ₹{lowestPrice.selling_price}</h4>
              <p>Pharmacy ID: {lowestPrice.pharmacy_id}</p>
            </>
          ) : (
            <p>No stores selling this product near you</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
