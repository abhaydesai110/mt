import React from "react";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ContactUs from "./Pages/ContactUs";
import Chat from "./Pages/Chat";
import Gallery from "./Pages/Gallery";
import MegaMenu from "./Pages/MegaMenu";
import Profile from "./Pages/Profile";
import Navbar from "./Pages/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="chat" element={<Chat />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="megamenu" element={<MegaMenu />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      {/* <Register />
      <Login />
      <Chat />
      <ContactUs />
      <Gallery />
      <MegaMenu />
      <Profile /> */}
    </>
  );
};

export default App;
