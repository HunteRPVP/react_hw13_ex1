import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

import { Connected } from "./Connected";
import { reducer } from "./reducers";
import { watchLoadData } from "./sagas";

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(watchLoadData);

  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  );
};

export default App;
