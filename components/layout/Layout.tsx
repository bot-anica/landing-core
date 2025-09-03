import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  const isPrepaymentPage = /^\/[^/]+\/prepayment$/.test(location.pathname);
    
  return (
    <div className="test">
      <Header isPrepaymentPage={isPrepaymentPage} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}