import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Fashion Trends</h1>
      </header>
      <main>{children}</main>
      <footer className="mt-8 text-center">
        <p>&copy; 2023 My Articles Website</p>
      </footer>
    </div>
  );
};

export default Layout;