import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppWrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // রাউট চেঞ্জ হলে স্ক্রল টপে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default AppWrapper;
