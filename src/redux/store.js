import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saltReducer from './reducers';
import { watchFetchSaltSuggestions } from './sagas';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    salt: saltReducer,
  },
  // middleware: [sagaMiddleware],
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        sagaMiddleware,
     
      )

})

sagaMiddleware.run(watchFetchSaltSuggestions);
