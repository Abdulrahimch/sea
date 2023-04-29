import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    // this background only for other pages
    <div className="bg-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
