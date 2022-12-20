import UserContextProvider from "./store/user-context";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <MainPage />
      {/* TODO: move cart after adding routing */}
      <CartPage />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
