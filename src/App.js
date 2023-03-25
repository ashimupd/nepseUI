import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<p>Not found...</p>} />
        </Routes>
      </Header>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
