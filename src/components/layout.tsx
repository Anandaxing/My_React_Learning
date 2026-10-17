import React from "react";

const Layout = ({children}: React.ReactNode) => {
  return (
    <>
      <div>
        {children}
        <footer>
          &copy; 2026 UTP
        </footer>
      </div>
    </>
  );
};

export default Layout;

