import UserContextProvider from "./store/user-context";

import MainHeader from "./components/MainHeader/MainHeader";
import SweetsList from "./components/SweetsList/SweetsList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <SweetsList />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
