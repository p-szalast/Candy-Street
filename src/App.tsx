import UserContextProvider from "./store/user-context";

import MainHeader from "./components/MainHeader/MainHeader";
import Hero from "./components/Hero/Hero";
import SweetsList from "./components/SweetsList/SweetsList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <UserContextProvider>
      <MainHeader />
      <Hero />
      <SweetsList />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
