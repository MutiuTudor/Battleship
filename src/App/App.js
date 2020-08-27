import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/stores";
import { Ships } from "./Ships";
import { Board } from "./Board";

const App = () => {
  return (
    <Provider store={store}>
      <Ships></Ships>
      <div className="board">
        <Board/>
      </div>
    </Provider>
  );
};

export default App;
