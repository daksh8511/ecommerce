import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./component/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import Checkout from "./pages/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import ProductDetails from "./pages/ProductDetails";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./component/Admin/Admin.layout";
import AdminHomePage from "./component/Admin/AdminHomePage";
import UserManagment from "./component/Admin/UserManagment";
import ProductManagment from "./component/Admin/ProductManagment";
import EditProductPage from "./component/Admin/EditProductPage";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>

        {/* for main page */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrderPage />} />
        </Route>

        {/* admin page */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="users" element={<UserManagment />} />
          <Route path="products" element={<ProductManagment />} />
          <Route path="products/:id/edit" element={<EditProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
