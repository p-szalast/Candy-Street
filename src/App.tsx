import UserContextProvider from "./store/user-context";

import MainHeader from "./components/MainHeader/MainHeader";
import SweetsList from "./components/SweetsList/SweetsList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <main>Order our delicious sweets now!</main>
      <SweetsList />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
