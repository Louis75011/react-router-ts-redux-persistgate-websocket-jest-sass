import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import persistedReducer from './persist';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default store;

// export const SET_DATA = 'SET_DATA';

// interface SetDataAction {
//   type: typeof SET_DATA;
//   payload: { symbol: string; price: number };
// }

// export const setData = (data: { symbol: string; price: number }): SetDataAction => ({
 
// import { combineReducers } from 'redux';
// import { SET_DATA } from './actions';

// interface DataState {
//   symbol: string;
//   price: number;
// }

// interface RootState {
//   data: DataState | null;
// }

// const initialDataState: DataState | null = null;

// const dataReducer = (state = initialDataState, action: any): DataState | null => {
//   switch (action.type) {
//     case SET_DATA:
//       return {
//         symbol: action.payload.symbol,
//         price: action.payload.price,
//       };
//     default:
//       return state;
//   }
// };

// // export const rootReducer = combineReducers<RootState>({
// //   data: dataReducer,
// // });