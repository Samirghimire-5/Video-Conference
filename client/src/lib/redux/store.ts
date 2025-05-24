import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import userReducer from "./user/userSlice";
import localStorage from "redux-persist/lib/storage";

const presistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
  whiteList: ["user"],
}

const rootReducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(presistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
