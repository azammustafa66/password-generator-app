import { Provider } from "react-redux";
import GeneratePassword from "./components/GeneratePassword";
import Password from "./components/Password";
import store from "./utils/store";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Provider store={store}>
        <Password />
        <GeneratePassword />
      </Provider>
    </div>
  );
};

export default App;
