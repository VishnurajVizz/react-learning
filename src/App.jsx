import "./App.css";
import { Cart } from "./cart";
import store from "./store/store";
import { Provider } from "react-redux";
import { Users } from "./users";

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <Users />
    </Provider>
  );
}

export default App;
