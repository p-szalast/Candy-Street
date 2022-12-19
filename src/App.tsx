import UserContextProvider from "./store/user-context";

import MainHeader from "./components/Layout/MainHeader/MainHeader";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <MainPage />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
