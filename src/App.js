import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './proxy';
import Index from './pages/home';
import Category from "./pages/Category/Category";
import Customer from "./pages/Customer/Customer";
import Employee from "./pages/Employee/Employee";
import Order from "./pages/Order/Order";
import Payment from "./pages/Payment/Payment";
import Book from "./pages/Book/Book";
import AddBook from "./pages/Book/AddBook";
import EditBook from "./pages/Book/EditBook";
import Role from "./pages/Role/Role";
import Subcategories from "./pages/Category/Subcategory";
import Permisstion from "./pages/Permisstion/Permisstion";
import Login from "./pages/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category" element={<Category />} />
        <Route path="/Subcategories/:id" element={<Subcategories />} />
        <Route path="/Role" element={<Role />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Role" element={<Role />} />
        <Route path="/Permisstion" element={<Permisstion />} />
        <Route path="/EditBook/:id" element={<EditBook />} />
        <Route path="/AddBook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
