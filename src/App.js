import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./Components/Navbar/Navbar";

// Pages
import { ShopPage } from "./Pages/ShopPage";
import { ShopCategoryPage } from "./Pages/ShopCategoryPage";
import { ProductPage } from "./Pages/ProductPage";
import { CartPage } from "./Pages/CartPage";
import { LoginSignupPage } from "./Pages/LoginSignupPage";
import { Footer } from "./Components/Footer/Footer";

// Images
import banner_men from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route
          path="/men"
          element={<ShopCategoryPage banner={banner_men} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategoryPage banner={banner_women} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategoryPage banner={banner_kids} category="kid" />}
        />
        <Route path="/product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
