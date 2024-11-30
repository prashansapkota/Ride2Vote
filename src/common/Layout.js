import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--primary-white)'
  };

  const mainStyle = {
    flex: 1,
    padding: '20px'
  };

  return (
    <div style={layoutStyle}>
      <nav>
        <Header />
      </nav>
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
