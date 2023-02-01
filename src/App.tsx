import { Routes, Route } from "react-router-dom";
import UserContextProvider from "./store/user-context";
import { navKeys } from "./routes/routes";

import { Toaster } from "react-hot-toast";
import { toastOptionsObject } from "./common/styles/toastStyles";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import MainPage from "./pages/MainPage/MainPage";
import CartPage from "./pages/CartPage/CartPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import HistoryPage from "./pages/History/HistoryPage";
import Footer from "./components/Layout/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <MainHeader />
        <Routes>
          <Route path={navKeys.main} element={<MainPage />} />
          <Route path={navKeys.cart} element={<CartPage />} />
          <Route path={navKeys.summary} element={<SummaryPage />} />
          <Route path={navKeys.history} element={<HistoryPage />} />
        </Routes>
        <Footer />
        <Toaster
          position="bottom-center"
          containerStyle={{ marginBottom: "8rem" }}
          toastOptions={toastOptionsObject}
        />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
