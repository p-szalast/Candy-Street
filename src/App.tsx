import UserContextProvider from "./store/user-context";

import MainHeader from "./components/MainHeader";
import SweetsList from "./components/SweetsList";
import Footer from "./components/Footer";

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
