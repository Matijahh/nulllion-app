import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
