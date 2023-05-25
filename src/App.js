import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar"
import "./app.css"
import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductList />} />
          <Route path="/newProduct" element={<ProductList />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
