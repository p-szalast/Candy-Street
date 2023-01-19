import { Routes, Route } from "react-router-dom";
import UserContextProvider from "./store/user-context";
import { navKeys } from "./routes/routes";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <Routes>
        <Route path={navKeys.main} element={<MainPage />} />
        <Route path={navKeys.cart} element={<CartPage />} />
        <Route path={navKeys.summary} element={<SummaryPage />} />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
