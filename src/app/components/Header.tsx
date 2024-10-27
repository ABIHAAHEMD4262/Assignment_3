import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-sky-700 text-white h-17 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold p-[20px] text-lg italic">My Landing Page</h1>
        <nav>
          <Link href="/" className="mr-4 hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
