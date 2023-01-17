import UserContextProvider from "./store/user-context";

import { Route } from "react-router-dom";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <Route path="/">
        <MainPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
