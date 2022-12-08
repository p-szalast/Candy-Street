import UserContextProvider from "./store/user-context";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <main>main</main>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
