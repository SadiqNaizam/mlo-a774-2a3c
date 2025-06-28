import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link to="/" className="flex items-center gap-2">
          <LogIn className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">QuickLogin</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;