import UserContextProvider from "./store/user-context";

import { Routes, Route } from "react-router-dom";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Routes></Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
