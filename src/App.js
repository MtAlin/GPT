import NavBar from "./Components/NavBar";
import HeaderSection from "./Components/HeaderSection";
import CompaniesLogo from "./Components/CompaniesLogo";
import WhatIs from "./Components/WhatIs";
import Feature2 from "./Components/Feature2";
import Feature from "./Components/Feature";
import Rectangle from "./Components/Rectangle";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-container">
      <NavBar />
      <HeaderSection />
      <CompaniesLogo />
      <WhatIs />
      <Feature />
      <Feature2 />
      <Rectangle />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
