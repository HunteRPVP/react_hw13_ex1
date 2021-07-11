import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h1>Complex State</h1>

          <div className="forms">
            <AuthContainer />
            <RegistrationContainer />
          </div>
        </div>
      </Provider>
    );
  }
}
