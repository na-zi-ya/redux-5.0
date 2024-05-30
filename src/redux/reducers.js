// import { createReducer } from '@reduxjs/toolkit';
// import { setSaltSuggestions, setError } from './actions';

// const initialState = {
//   saltSuggestions: [],
//   loading: false,
//   error: null
// };


// const saltReducer = createReducer(initialState, builder => {
//   builder.addCase(setSaltSuggestions, (state, action) => {
//     state.saltSuggestions = action.payload;
//     state.loading = false;
//     state.error = null;
//   }),
//   [setError]: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   }
// });

// export default saltReducer;
// import { createSlice } from '@reduxjs/toolkit';
// import { setSaltSuggestions, setError } from './actions';

// const initialState = {
//   saltSuggestions: [],
//   loading: false,
//   error: null
// };

// const saltReducer = createSlice({
//   name: "salt",
//   initialState,
//   reducers: {
//   [setSaltSuggestions]: (state, action) => {
//     state.saltSuggestions = action.payload;
//     state.loading = false;
//     state.error = null;
//   },
//   [setError]: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   }
// }});

// export default saltReducer;

import { createReducer } from '@reduxjs/toolkit';
import { setSaltSuggestions, setError, setLoading, pharmacyId, formAction, strengthAction, packingAction, lowestPriceAction, resetSelectedForm } from './actions';

export const initialState = {
  saltSuggestions: [],
  selectedFormId: [],
  formKey: '',
  strengthKey: '',
  packingKey: '',
  lowestPrice: null,
  loading: false,
  error: null
};

const saltReducer = createReducer(initialState, (builder) => {
  builder
  
  .addCase(setLoading, (state) => { 
    state.loading = true;
  })
    .addCase(setSaltSuggestions, (state, action) => {
      state.saltSuggestions = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(setError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(pharmacyId, (state, action) => {
      state.selectedFormId = action.payload;
    })
    .addCase(formAction, (state, action) => {
      state.formKey = action.payload;
      // state.strengthKey = '';
      // state.packingKey = '';
    })
    .addCase(strengthAction, (state, action) => {
      state.strengthKey = action.payload;
    })
    .addCase(packingAction, (state, action) => {
      state.packingKey = action.payload;
    })
    .addCase(lowestPriceAction, (state, action) => {
      state.lowestPrice = action.payload;
    }).addCase( resetSelectedForm, 
      (state) => {
      // state.formKey = '';
      // state.strengthKey = '';
      // state.packingKey = '';
      state.lowestPrice = null;
    });
});


export default saltReducer;