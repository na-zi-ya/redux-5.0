import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./reducers";

export const selectState = state => state ?? initialState;
// console.log(selectState.salt.salt)
// export const selectSalts = (state) => state.salts.salts;


export const saltSearch = createSelector(
  [selectState],
  selectState => selectState.salt.saltSuggestions
);
console.log(saltSearch,"saltSearch");

export const selectPhrmId = createSelector(
    [selectState],
    selectState => selectState.salt.selectedFormId
  );
export const selectSelectedForm = createSelector(
    [selectState],
    selectState => selectState.salt.formKey
  );
  console.log(selectSelectedForm,"selectSelectedForm")
export const selectSelectedStrength = createSelector(
    [selectState],
    selectState => selectState.salt.strengthKey
  );
  export const selectSelectedPacking = createSelector(
    [selectState],
    selectState => selectState.salt.packingKey
  );
 
  export const selectLowestPrice  = createSelector(
    [selectState],
    selectState => selectState.salt.lowestPrice
  )

