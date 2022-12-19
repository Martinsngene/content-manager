import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutPropsI {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutPropsI) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
