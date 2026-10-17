import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // pure function
  // function multiply(num: number) {
  //   return num * 2;
  // }

  // non pure function
  // let count = 0;
  // function increment() {
  //   count++;
  //   return count;
  // }
  
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

