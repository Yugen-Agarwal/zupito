import { useLocation } from "react-router-dom";
import PromotionalBanner from "./components/promotionalBanner/PromotionalBanner";
import Header from "./components/header/Header";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <PromotionalBanner />}
      <Header />
      {children}
    </>
  );
};

export default Layout;
